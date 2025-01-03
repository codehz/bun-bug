struct X {
  char *buffer;
};

void *workaround(void *a) {
  return a;
}

struct X *getInstance() {
  static struct X x = {};
  x.buffer = __builtin_malloc(10);
  return &x;
}
