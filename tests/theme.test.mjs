import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('../src/scripts/theme-init.js',import.meta.url),'utf8');

for (const choice of ['light','dark']) {
  test(`early theme applies a saved ${choice} override before rendering`,()=>{
    const document={documentElement:{dataset:{}}};
    vm.runInNewContext(source,{document,localStorage:{getItem:()=>choice}});
    assert.equal(document.documentElement.dataset.theme,choice);
  });
}
for (const choice of [null,'system','unexpected','<script>']) {
  test(`theme leaves CSS system preference in control for ${String(choice)}`,()=>{
    const document={documentElement:{dataset:{}}};
    vm.runInNewContext(source,{document,localStorage:{getItem:()=>choice}});
    assert.deepEqual(document.documentElement.dataset,{});
  });
}
test('blocked preference storage never prevents the document rendering',()=>{
  const document={documentElement:{dataset:{}}};
  assert.doesNotThrow(()=>vm.runInNewContext(source,{document,localStorage:{getItem(){throw new Error('storage blocked')}}}));
  assert.deepEqual(document.documentElement.dataset,{});
});
