// Ex recursion for fibonacci not good
// https://viblo.asia/p/tim-hieu-ve-giai-thuat-de-quy-3Q75wVVQlWb?fbclid=IwAR3IDXn-jkdE4-I-34HKcvfawQq7M0y0H7Jjt9rcBBw1R3Sw3EC6wJIvA5w
// We can define the fibonacci sequence recursively as follows:
// F(0) = 0; F(1) = 1; F(n) = F(n-1)+F(n-2) with n>=2;
// check image: https://images.viblo.asia/0b7d5d4e-3637-4d10-88a3-b08602585ea9.jpg
function fibonacciNotGood(n) {
  if (n < 2) return n;
  return fibonacciNotGood(n - 1) + fibonacciNotGood(n - 2);
}
// Not good because: with the recursive implementation as above, we have repeated the calculation many times

// --> Better
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; ++i) fib.push(fib[i - 1] + fib[i - 2]);
  return fib[n];
}
