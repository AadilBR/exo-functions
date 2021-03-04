const isPalindrom = (str) => {

  return str.split('').reverse().join('') === (str) ? true : false


}
console.log(isPalindrom("ABBA"));

