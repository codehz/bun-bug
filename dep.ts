const napi_base =
  "https://raw.githubusercontent.com/oven-sh/bun/refs/heads/main/src/napi/";

async function downloadFile(base: string, filename: string) {
  console.time("Downloading " + filename);
  await Bun.write("./node/" + filename, await fetch(base + filename));
  console.timeEnd("Downloading " + filename);
}

await downloadFile(napi_base, "js_native_api.h");
await downloadFile(napi_base, "js_native_api_types.h");
await downloadFile(napi_base, "node_api.h");
await downloadFile(napi_base, "node_api_types.h");
