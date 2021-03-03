function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

function isOdd(n) {
  return isEven(Number(n) + 1);
}

n = 3

console.log(isEven(n))