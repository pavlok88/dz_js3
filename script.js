// --------------------------Задание 1------------------------
// Найти сумму ряда последовательно идущих чисел от lim1 до lim2
// Например, если  lim1=5, lim2=8, то это сумма 5+6+7+8
// Задание решить с помощью:

// общая часть для всех заданий, вводим значения и проверяем их.
const lim1 = +prompt("enter lim1");
const lim2 = +prompt("enter lim2");
if (isNaN(lim1) || isNaN(lim2)) console.log("you enter wrong value");
else if (lim1 === lim2) console.log(`value1 = value2 result=${lim1}`);
else {
  let sum = 0,
    min = lim1 <= lim2 ? lim1 : lim2,
    max = lim1 <= lim2 ? lim2 : lim1;
  // 1.1 цикл for
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  console.log(`task 1.1 = ${sum}`);

  // 1.2 цикла while
  sum = 0;
  let i = min;
  while (i <= max) {
    sum += i;
    i++;
  }
  console.log(`task 1.2 = ${sum}`);
}

// 1.3 создание функции
function sumFun(lim1, lim2) {
  if (isNaN(lim1) || isNaN(lim2)) return "you enter wrong value";
  else if (lim1 === lim2) return `value1 = value2 result=${lim1}`;
  else {
    let sum = 0,
      min = lim1 <= lim2 ? lim1 : lim2,
      max = lim1 <= lim2 ? lim2 : lim1;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return `task 1.3 = ${sum}`;
  }
}
console.log(sumFun(lim1, lim2));

// ------------------------Задание 2------------------------
// Реализовать стрелочную функцию произведения двух чисел

let multiple = (a, b) => a * b;
console.log(`task 2.0  -  ${multiple(lim1, lim2)}`);

// ------------------------Задание 3------------------------
// (Массив одномерный)
// 3.1 Создать числовой массив и проинициализировать его
const arrOne = [1, 2, 3, 0, 4, 5, 0, -2, -7];

// 3.1* (усложненное) инициализация с помощью случайных чисел
const arr = [];

function arrRandomValue(arrName, arrLength, minArrValue, maxArrValue) {
  minArrValue = Math.ceil(minArrValue);
  maxArrValue = Math.floor(maxArrValue);
  for (let i = 0; i < arrLength; i++) {
    arrName[i] =
      Math.floor(Math.random() * (maxArrValue - minArrValue + 1)) + minArrValue;
  }
}
arrRandomValue(arr, 10, -5, 5);
console.log(arr);

// 3.2 Вывести размер массива
console.log(`task 3.2  -  ${arr.length}`);

// 3.3 Вывести элементы с четными индексами
for (let i = 0; i < arr.length; i += 2) {
  console.log(`  task 3.3  -  ${arr[i]}`);
}

// 3.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) console.log(`task 3.4  -  ${arr[i]}`);
}

// 3.5 Вывести индексы нулевых элементов (элемент равен нулю)
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) console.log(`  task 3.5  -  ${i}`);
}

// 3.6 Подсчитать количество нулевых элементов
let totalZeros = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) totalZeros++;
}
console.log(`task 3.6  -  ${totalZeros}`);


// ------------------------Задание 4------------------------
// Создать объект Машина и прописать для него свойства.
const car = {
  make: "Tesla",
  model: "CiberTruck",
  year: 2020,
  isNew: true,
};
console.log(car);


// ------------------------Задание 5------------------------
// 5.1 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)

function Book(autor, name, year, publishing) {
  this.autor = autor;
  this.name = name;
  this.year = year;
  this.publishing = publishing;
}
const bookAboutJs = new Book("Eich", "About Js", 2020, "tipograpf");

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
function ElBook(autor, name, year, publishing, format, elNum) {
  this.autor = autor;
  this.name = name;
  this.year = year;
  this.publishing = publishing;
  this.format = format;
  this.elNum = elNum;
}
const elBookAboutJs = new ElBook("Eich", "About Js", 2020, "tipograpf", 'PDF', 111);

// 5.2 Переделать создание функций без дублежа информации, реализовав прототипное наследование
function ElBook_2(format, elNum) {
  this.format = format;
  this.elNum = elNum;
}
ElBook_2.prototype = new Book();
const elBookAboutJs_2 = new ElBook_2('PDF', 111);
elBookAboutJs_2.__proto__ = bookAboutJs;

// 5.3 Вывести объекты в консоль
console.log(bookAboutJs);
console.log(elBookAboutJs);
console.log(elBookAboutJs_2);