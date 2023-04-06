/* eslint-disable eqeqeq */
/* eslint-disable complexity */
/* eslint-disable no-else-return */
// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => {
  const check = (param1 === true && param2 === true) ? true : false;
  return check;
};

// Desafio 2 - Crie a função splitSentence

const splitSentence = (phrase) => {
  let separated = phrase.split(' ');
  return separated;
};

// Desafio 3 - Crie a função concatName

const concatName = (names) => {
  let last = names.length - 1;
  let firstLast = `${names[last]}, ${names[0]}`;
  return firstLast;
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  let tiess = ties * 1;
  let winss = wins * 3;
  let totalPoints = winss + tiess * 1;
  return totalPoints;
};

// Desafio 5 - Crie a função highestCount

const highestCount = (numbers) => {
  let highNumber = numbers[0];
  let repetition = 1;
  for (const index in numbers) {
    if (highNumber < numbers[index]) {
      highNumber = numbers[index];
    }
  }
  for (const rep of numbers) {
    if (rep == highNumber) {
      repetition += 1;
    }
  }
  return repetition;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  let triangle = (base * height) / 2;
  return triangle;
};

const calcRectangleArea = (base, height) => {
  let rectangle = (base * height);
  return rectangle;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  mouse = null;
  if (cat2 < cat1) {
    return 'cat2';
  } if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (num) => {
  let result = [];
  for (const index in num) {
    if (num[index] % 3 == 0 && num[index] % 5 != 0) {
      result.push('fizz');
    } else if (num[index] % 5 == 0 && num[index] % 3 != 0) {
      result.push('buzz');
    } else if (num[index] % 3 == 0 && num[index] % 5 == 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
};

// Desafio 9 - Crie a função encode a função decode

const encode = (string) => {
  let newString = [];
  for (const index in string) {
    if (string[index] == 'a') {
      newString.push('1');
    } else if (string[index] == 'e') {
      newString.push('2');
    } else if (string[index] == 'i') {
      newString.push('3');
    } else if (string[index] == 'o') {
      newString.push('4');
    } else if (string[index] == 'u') {
      newString.push('5');
    }else {
      newString.push(string[index]);
    }
  }
  return newString.join('');
};

const decode = (string) => {
  let newString = [];
  for (const index in string) {
    if (string[index] == '1') {
      newString.push('a');
    } else if (string[index] == '2') {
      newString.push('e');
    } else if (string[index] == '3') {
      newString.push('i');
    } else if (string[index] == '4') {
      newString.push('o');
    } else if (string[index] == '5') {
      newString.push('u');
    } else {
      newString.push(string[index]);
    }
  }
  return newString.join('');
};

// Desafio 10 - Crie a função techList



// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
