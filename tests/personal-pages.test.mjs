import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { publishedFocus, publishedDestinations, validateDate } from '../src/data/personal.ts';

const routes=['/','/about/','/now/','/contact/'];
const documents=new Map(routes.map(route=>[route,readFileSync(join('dist',route,'index.html'),'utf8')]));

test('every route has distinct metadata, one H1 and a sequential heading hierarchy',()=>{
  const titles=new Set(),descriptions=new Set();
  for(const [route,html] of documents){
    titles.add(html.match(/<title>(.*?)<\/title>/)[1]);
    descriptions.add(html.match(/name="description" content="([^"]+)"/)[1]);
    assert.equal([...html.matchAll(/<h1\b/g)].length,1,route);
    let previous=0;
    for(const [,level] of html.matchAll(/<h([1-6])\b/g)){assert.ok(+level<=previous+1,route);previous=+level;}
    for(const landmark of ['header','main','footer'])assert.match(html,new RegExp(`<${landmark}\\b`));
  }
  assert.equal(titles.size,4);assert.equal(descriptions.size,4);
});

test('navigation identifies the current route in both menus and all local destinations exist',()=>{
  for(const [route,html] of documents){
    const current=[...html.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)];
    assert.equal(current.length,2,route);
    current.forEach(([tag])=>assert.ok(tag.includes(`href="${route}"`)));
    for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
      if(!href.startsWith('/')&&!href.startsWith('#'))continue;
      const [path,fragment]=href.split('#');
      const destination=path ? join('dist',path,path.endsWith('/')?'index.html':'') : join('dist',route,'index.html');
      assert.ok(existsSync(destination),`${route}: ${href}`);
      if(fragment)assert.ok(readFileSync(destination,'utf8').includes(`id="${fragment}"`),href);
    }
    assert.doesNotMatch(html,/href="(?:#|\/work\/|\/notes\/|\/open-source\/)"|example\.com|Layout fixture|Stress fixture/);
  }
});

test('Now exposes a dated pending shell, never an unreviewed current activity',()=>{
  const html=documents.get('/now/');
  assert.match(html,/noindex,nofollow/);assert.match(html,/Awaiting a reviewed update/);
  assert.match(html,/Page prepared/);assert.match(html,/<time datetime="2026-11-08"/);
  assert.doesNotMatch(html,/Last reviewed|Currently building|GSoC contributor/);
  assert.equal(publishedFocus({status:'draft',preparedAt:'2026-11-08',sections:[{heading:'PRIVATE_DRAFT_SENTINEL',body:'unapproved'}]}),null);
});

test('published focus requires valid dates and nonempty reviewed content',()=>{
  for(const date of ['2026-02-30','invalid','2026-13-01'])assert.throws(()=>validateDate(date));
  assert.throws(()=>publishedFocus({status:'published',reviewedAt:'2026-11-08',sections:[]}));
  const record={status:'published',reviewedAt:'2026-11-08',sections:[{heading:'Reviewed heading',body:'Reviewed body'}]};
  assert.deepEqual(publishedFocus(record),record);
});

test('contact shows simple labels without visible email addresses or handles',()=>{
  const html=documents.get('/contact/');
  for(const href of ['mailto:sashivardhan.dev@gmail.com','https://github.com/sashivardhanr','https://www.linkedin.com/in/sashi-vardhan/'])assert.ok(html.includes(`href="${href}"`));
  assert.doesNotMatch(html,/<form\b|href=""/);
  assert.doesNotMatch(html,/noindex,nofollow/);
  const visibleText=html.replace(/<[^>]*>/g,'');
  assert.doesNotMatch(visibleText,/sashivardhan\.dev@gmail\.com|@sashivardhanr|https:\/\//);
  for(const label of ['Email me','GitHub','LinkedIn']) assert.ok(visibleText.includes(label));
  assert.doesNotMatch(documents.get('/about/'),/<h2>Work and writing<\/h2>/);
  assert.deepEqual(publishedDestinations([]),[]);
  assert.deepEqual(publishedDestinations([{status:'draft',label:'PRIVATE',href:'invalid'}]),[]);
  for(const href of ['javascript:alert(1)','http://example.test','https://user:password@example.test','mailto:not-an-address'])assert.throws(()=>publishedDestinations([{status:'published',label:'Test',href}]));
  assert.equal(publishedDestinations([{status:'published',label:'Test',href:'https://example.test'}])[0].detail,undefined);
});
