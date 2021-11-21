/*
const js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('Fabian');

console.log(23);

let firstname = 'Fabian';

console.log(firstname);


let javascriptIsFun: any = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Fabian');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null);


export let age:any = 30;
age = 31;

const birthYear: any = 1991;
// birthYear = 1990;

// const job: string;

var job: string = 'programmer';
job = 'teacher'

lastName = 'Lewis';
console.log(lastName);


// Math Operators
const now = 2037;
const ageFabian = now -1972;
const ageLorain = now -1973;
console.log(ageFabian, ageLorain);

console.log(ageFabian * 2, ageFabian / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Fabian';
const lastName = 'Lewis';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x += 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageFabian > ageLorain); // >, <, >=, <=
console.log(ageLorain >= 18);

const isFullAge = ageLorain >= 18;

console.log(now - 1972 > now - 1973);


const now = 2037;
const ageFabian = now -1972;
const ageLorain = now -1973;

console.log(now - 1972 > now - 1973);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 -5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageFabian + ageLorain) / 2
console.log(ageFabian, ageLorain, averageAge);
*/

/*
// BMI = mass / height ** 2; mass / (height * height)
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.76;
let johnMass = 85;
const markBmi = markMass / markHeight ** 2;
console.log(markBmi);
const johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);
const markHigherBmi = markBmi >= johnBmi;
console.log(markHigherBmi);
*/

/*
const a = 2;
const b = 7;

console.log(b + a);
console.log(b - a);
console.log(b * a);
console.log(b / a);
console.log(b % a);

const c = 3.5;
const d = 4.5;

console.log('Ceil ' + Math.ceil(c));
console.log('Floor ' + Math.floor(c));
console.log('Round' + Math.round(c));

console.log('Ceil ' + Math.ceil(d));
console.log('Floor ' + Math.floor(d));
console.log('Round ' + Math.round(d));

console.log(Math.max(8, 7, 1, 9, 10, -2));
console.log(Math.min(8, 7, 1, 9, 10, -2));

console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log(Math.random());

// 1-6
console.log(Math.floor(Math.random() * 5) + 1);
*/

/*
const matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(matrix.length);
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);
console.log(matrix[1][2]);

const arr = [0, 1, 2, 3, 4];
arr.push(5);
console.log(arr);
arr.unshift(-1);
console.log(arr);
const value = arr.pop();
console.log('Value is ' + value);
console.log('Array is ' + arr);
const value2 = arr.shift();
console.log('Value is ' + value2);
console.log('Array is ' + arr);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const filtered = numbers.filter((x) => x % 2 == 1);
console.log('Numbers are ' + numbers);
console.log('Filtered is ' + filtered);
const powers = filtered.map((x) => x ** 2);
console.log('Powers are ' + powers);
const sum = powers.reduce((prev, current) => prev + current, 0);
console.log('Sum is ' + sum);

const numbers2 = [0, 1, 3, 6, 7, 8, 9, 2, 4, 5, 31, -2];
console.log('Numbers are ' + numbers2);
numbers2.sort((a, b) => a - b);
console.log('Sorted (a - b) is ' + numbers2);
numbers2.sort((a, b) => b - a);
console.log('Sorted (b - a) is ' + numbers2);

function calculateOddPowersSum(arr) {
  const powers = arr.filter((x) => x % 2 === 1).map((x) => x ** 2);
  return powers.reduce((prev, current) => prev + current, 0);
}

console.log('Sum of numbers is ' + calculateOddPowersSum(numbers));
console.log('Sum of numbers2 is ' + calculateOddPowersSum(numbers2));

function dontKnow(name, age) {
  console.log('Your name is', name, 'and your age is', age);
}

dontKnow('Alice', 24);
dontKnow('Jeff', 30);

const fn = function (name, age) {
  console.log('Your name is', name, 'and your age is', age);
};

fn('Alice', 24);
fn('Jeff', 30);

const arrow = (name, age) => {
  console.log('Your name is', name, 'and your age is', age);
};

arrow('Alice', 24);
arrow('Mel', 30);
*/

function power(a, b) {
  return a ** b;
}

console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(3, 2));
console.log(power(3, 3));

function powerfn(b) {
  return (a) => a ** b;
}

const power2 = powerfn(2);
const power3 = powerfn(3);

console.log(power2(2));
console.log(power3(2));
console.log(power2(3));
console.log(power3(3));

function credentials(login, password) {
  return () => calculateHash(login, password);
}

const hash = credentials('admin', '1234');

console.log('Your hash is', hash);
