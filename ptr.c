struct X {
  char *buffer;
};

struct X *getInstance() {
  static struct X x = {};
  x.buffer = __builtin_malloc(10);
  return &x;
}
