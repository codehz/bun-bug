import { cc } from "bun:ffi";
import { fullGC, gcAndSweep, heapSize } from "bun:jsc";

function alloc() {
  const result = [];
  for (let i = 0; i < 50000; i++) {
    result.push([]);
  }
  return result;
}
prompt("wait");
for (let i = 0; ; i++) {
  await Bun.sleep(1);
  console.time(`iter ${i}`);
  for (let i = 0; i < 1000; i++) {
    alloc();
  }
  fullGC();
  gcAndSweep();
  console.timeEnd(`iter ${i}`);
  console.log(heapSize());
}
