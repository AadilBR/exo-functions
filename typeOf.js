const typeOf = (myVar) => {

  return typeof myVar
}



console.log(typeof 10);
// expected output: "number"

console.log(typeof 'Aadil');
// expected output: "string"

console.log(typeof false);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"