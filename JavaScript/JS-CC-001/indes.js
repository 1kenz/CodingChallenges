function fibonacci(x) {
  let b = 1;
  let a = 1;
  let c;
  while (x > 2) {
    c = a + b;
    a = b;
    b = c;
    x--;
  }
  return b;
}
console.log(fibonacci(16));