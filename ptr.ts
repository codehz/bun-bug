import { cc, read, toBuffer, type Pointer } from "bun:ffi";

const { symbols } = cc({
  source: "./ptr.c",
  symbols: { getInstance: { args: [], returns: "ptr" } },
});

const x = symbols.getInstance();
const data = read.ptr(x!, 0);
console.log(toBuffer(data as Pointer, 0, 10))
