// Desafio 11 - Crie a função generatePhoneNumber
const testZero = (number) => number.some((n) => number[n] < 0);

const testNine = (number) => number.some((n) => number[n] >= 10);

const testTree = (number) => {
  const num = number.sort();
  let value = null;
  let score = 0;

  for (const element of num) {
    if (element != value) {
      value = element;
      score = 1;
    } else {
      score += 1;
      if (score === 3) {
        break;
      }
    }
  }
  return score;
};

const generatePhoneNumber = (number1) => {
  if (testZero(number1) === true || testNine(number1) === true || testTree(number1) === 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (number1.length !== 10) {
    return 'Array com tamanho incorreto.';
  }
  return number1.join();
};

console.log(generatePhoneNumber([8, 9, 7, 8, 6, 7, 1, 2, 3, 1]));

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
