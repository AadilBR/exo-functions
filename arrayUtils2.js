var nombres = ([99, 100, 101, 1]) // returns [1, 99, 100, 101]

nombres.sort(function (a, b) {
  return a - b;
});
console.log(nombres);



nombres.sort((a, b) => b - a);
console.log(nombres);