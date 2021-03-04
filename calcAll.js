const calcul = (nb1, op, nb2) => {

  switch (op) {
    case '+':
      return nb1 + nb2;
      break;
    case '-':
      return nb1 - nb2;
      break;
    case '*':
      return nb1 * nb2;
      break;
    case '/':
      return nb1 / nb2;
      break;
  }
}
console.log(calcul(1, '*', 2))