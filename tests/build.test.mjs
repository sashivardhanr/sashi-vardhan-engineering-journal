import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function files(dir){return readdirSync(dir).flatMap(name=>{const p=join(dir,name);return statSync(p).isDirectory()?files(p):[p]});}
const html=readFileSync('dist/index.html','utf8');

test('production emits only the four approved routes and excludes all fixture records/assets',()=>{
  assert.deepEqual(files('dist').filter(p=>p.endsWith('.html')).sort(),['dist/about/index.html','dist/contact/index.html','dist/index.html','dist/now/index.html']);
  assert.doesNotMatch(html,/fixture-|Layout fixture|Stress fixture|planning material|architecture-excerpt/);
  assert.ok(!files('dist').some(p=>/fixture|architecture-excerpt|order-a|order-b/.test(p)));
  assert.doesNotMatch(html,/Case studies will appear here|id="work"|href="#work"/);
  assert.match(html,/id="journal"/);
  assert.match(html,/Explore my interests/);
});
test('production has one H1 and valid local fragment destinations',()=>{
  assert.equal([...html.matchAll(/<h1\b/g)].length,1);
  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
  for(const [,fragment] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.has(fragment),fragment);
});
test('local assets referenced by production exist and stay local',()=>{
  for(const [,asset] of html.matchAll(/(?:src|href)="(\/[^"#?]+)"/g))assert.ok(statSync(join('dist',asset.endsWith('/') ? asset+'index.html' : asset)).isFile(),asset);
  assert.doesNotMatch(html,/https?:\/\/(?:fonts|www\.google|analytics)/);
  const font=readFileSync('public/fonts/source-serif-4-latin.woff2');
  assert.equal(font.subarray(0,4).toString(),'wOF2');
  assert.ok(font.length<60000,'font budget');
});
test('the review build renders both content orders without changing production',()=>{
  for(const [order,before,after] of [['a','id="interests"','id="work"'],['b','id="work"','id="interests"']]){
    const review=readFileSync(`.review-dist/order-${order}/index.html`,'utf8');
    assert.ok(review.indexOf(before)<review.indexOf(after));
    assert.match(review,/noindex,nofollow/);
    assert.match(review,/Layout fixture 01/);
  }
});
test('text-only and missing-metadata records have no empty image or date placeholders',()=>{
  const review=readFileSync('.review-dist/order-b/index.html','utf8');
  const article=[...review.matchAll(/<article\b[\s\S]*?<\/article>/g)].map(m=>m[0]).find(s=>s.includes('fixture-text-title'));
  assert.ok(article);
  assert.doesNotMatch(article,/<figure|<img|<time|project-meta/);
  assert.match(article,/When the explanation is the artifact/);
});
test('script-free review has no scripts but includes native navigation and figure text',()=>{
  const review=readFileSync('.review-dist/no-script/index.html','utf8');
  assert.doesNotMatch(review,/<script\b/);
  assert.match(review,/<details[^>]*id="mobile-menu"/);
  assert.match(review,/Read figure text/);
});
