var nombres = ([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) // returns [1, 99, 100, 101]


nombres.sort(function (a, b) {
  return a - b
}

console.log(nombres)