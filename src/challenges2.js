// Desafio 11 - Crie a função generatePhoneNumber
const testZero = (number) => number.some((n) => number[n] < 0);

const testNine = (number) => number.some((n) => number[n] >= 10);

const testTree = (number) => {
  const num = number.sort();
  let value = null;
  let score = 0;

  for (const element of num) {
    if (element !== value) {
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
  let stringNum = number1.join('');
  if (number1.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (testZero(number1) === true || testNine(number1) === true || testTree(number1) === 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${stringNum.slice(0, 2)}) ${stringNum.slice(2, 7)}-${stringNum.slice(7, )}`;
};

// Desafio 12 -  Crie a função triangleCheck
const checkUm = (lineA, lineB, lineC) => {
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
};

const checkDois = (lineA, lineB, lineC) => {
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineB + lineA)) {
    return true;
  }
};

const triangleCheck = (lineA, lineB, lineC) => {
  if (checkUm(lineA, lineB, lineC) === true && checkDois(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let number = string.match(/\d+/g);
  let sum = 0;
  for (const element of number) {
    sum += Math.abs(element);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
