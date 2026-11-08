import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const css = readFileSync('src/styles/tokens.css','utf8');
const luminance = hex => hex.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
const contrast=(a,b)=>{const [lo,hi]=[luminance(a.slice(1)),luminance(b.slice(1))].sort((x,y)=>x-y);return (hi+.05)/(lo+.05)};
for(const [theme,body] of [['light',css.split('@media')[0]],['dark',css.split(":root[data-theme='dark']")[1].split('}')[0]]]) {
  const tokens=Object.fromEntries([...body.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/g)].map(m=>[m[1],m[2]]));
  test(`${theme}: text/accent/notice contrast at least 4.5:1; control boundary at least 3:1`,()=>{
    for(const role of ['text','muted','accent','notice']) assert.ok(contrast(tokens[role],tokens.bg)>=4.5,`${role} contrast`);
    assert.ok(contrast(tokens.control,tokens.bg)>=3);
  });
}
