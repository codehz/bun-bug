#include "node/node_api.h"

napi_value alloc(napi_env env) {
  napi_value result;
  napi_create_array(env, &result);
  for (int i = 0; i < 50000; i++) {
    napi_value value;
    napi_create_array(env, &value);
    napi_set_element(env, result, i, value);
  }
  return result;
}