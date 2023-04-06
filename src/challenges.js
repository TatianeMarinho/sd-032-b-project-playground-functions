/* eslint-disable eqeqeq */
/* eslint-disable complexity */
/* eslint-disable no-else-return */
// Desafio 1 - Crie a função compareTrue
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(phrase) {
  let separated = phrase.split(' ');
  return separated;
}

// Desafio 3 - Crie a função concatName

function concatName(names) {
  let last = names.length - 1;
  let firstLast = `${names[last]}, ${names[0]}`;
  return firstLast;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 5 - Crie a função highestCount

function highestCount(numbers) {
  let highNumber = numbers[0];
  let repetition = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (highNumber.length < numbers[index].length) {
      highNumber = numbers[index];
    }
  }
  for (let mIndex = 0; mIndex < numbers.length; mIndex += 1) {
    if (mIndex = highNumber) {
      repetition += 1;
    }
}
  return repetition;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

function calcRectangleArea(base, height) {
  let rectangle = (base * height);
  return rectangle;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  mouse = null;
  if (cat2 < cat1) {
    return 'cat2';
  } if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(num) {
  let result = [];
  for (let index = 0; index < num.length; index += 1) {
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
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 - Crie a função encode e a função decode

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
