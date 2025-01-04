import { cc } from "bun:ffi";
import { fullGC, gcAndSweep, heapSize } from "bun:jsc";

const { symbols } = cc({
  source: "./alloc.c",
  symbols: {
    alloc: { args: ["napi_env"], returns: "napi_value" },
  } as const,
});
prompt("wait");
for (let i = 0; ; i++) {
  await Bun.sleep(1);
  console.time(`iter ${i}`);
  for (let i = 0; i < 1000; i++) {
    symbols.alloc(null);
  }
  fullGC();
  gcAndSweep();
  console.timeEnd(`iter ${i}`);
  console.log(heapSize());
}
