// Déclaration de showStars.
// nbBase est un entier correspondant au nombre d'étoile de la base de notre pyramide
// reverse est un boolean. Si reverse === true alors afficher la pyramide à l'envers
// showStars retourne une string contenant la pyramide
const showStars = (nbBase, reverse, elem) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += elem.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += elem.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

// Appel de la fonction showStars avec l'argument 15 et true et le caractere A
// la fonction retourne une string que l'on peut afficher 
let str1 = showStars(15, false, "A")
console.log(str1)
