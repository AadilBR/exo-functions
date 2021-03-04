function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

function isOdd(n) {
  return isEven(Number(n) + 1);
}


console.log(isEven(0))
console.log(isOdd(3))


const isOdd = (nb) => {
  /*
  if (nb % 2 !== 0) {
    return true
  } else {
    return false
  }
  */
  return nb % 2 !== 0
}

const isEven = (nb) => {
  return !isOdd(nb)
}

console.log(isOdd(1)) // true
console.log(isOdd(10)) // false
console.log(isEven(1)) // false
console.log(isEven(10)) // true