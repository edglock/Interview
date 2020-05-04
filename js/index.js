const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
const underDiag = [], aboveDiag = [];
/*for ( let i = 1; i < matrix.length; i++ ) {
    for ( let j = 0; j < i; j++) {
        underDiag.push(matrix[i][j]);
    }
}
for ( let i = 0; i < matrix.length - 1; i++ ) {
    for ( let j = i + 1; j < matrix.length; j++ ) {
        aboveDiag.push(matrix[i][j]);
    }
}*/
matrix.forEach((row, outer) =>
  row.forEach((num, inner) => {
    if (inner < outer) underDiag.push(num);
  })
);
matrix.forEach((row, outer) =>
  row.forEach((num, inner) => {
    if (inner > outer) aboveDiag.push(num);
  })
);
console.log('under ', ...underDiag);
console.log('above ', ...aboveDiag);
//====================================
const arr = [1,2,3,4,5,6,7,8];
const suddenly = (array) => console.log(array.reverse());
suddenly(arr);
//====================================
let max = arr.reduce((max, item) => max < item ? item : max);
console.log(max);
//====================================
let sum = arr.reduce((sum, item) => sum + item);
console.log(sum);
//====================================
// for ( var i = 0; i < 10; i++ ) {
//     (function(i) {
//         setTimeout(() => console.log(i), 0);
//     })(i);
// }
//====================================
const row = ['qwer', 'hjkl', 'qwerewq', 'hjklkjh'];
const palindrom = [];
row.forEach((item) => {
    if ( item.split('').reverse().join('') === item ) palindrom.push(item);});
console.log('palindrom: ', ...palindrom);
//====================================
// function fibonacci(n) {
//   const arr = [1,1];
//   for ( let i = 2; i <= n; i++ ) {
//     arr[i] = arr[i - 2] + arr[i - 1]; 
//   }
//   console.log(arr[n]);
// }
const fibonacci = n => (n <= 1) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
console.log('Fibonacci - ', fibonacci(4));
//====================================
const pow = (base, exponent) => exponent === 0 ? 1 : base * pow(base, exponent - 1);
console.log('Pow = ', pow(2, 3));
//====================================
var i = 10;
function foo(i) {
  console.log(i);
}
foo();//undefined
//====================================
function strategy(car) {
  const carFrom = car;
  const carTo = [];
  const square = [];
  const amount = carFrom.length;
  if (amount < 3 || amount > 8)
    return console.log("Slab amount doesn't meet task circumstances.");
  showStrategy();
  function crane(amount, carFrom, carTo, square) {
    if (amount >= 1) {
      crane(amount - 1, carFrom, square, carTo);
      exchange(carFrom, carTo);
      crane(amount - 1, square, carTo, carFrom);
    }
  }
  function exchange(carFrom, carTo) {
    carTo.push(carFrom.pop());
    showStrategy();
  }
  function showStrategy() {
    console.log('carFrom = ', ...carFrom, '; square = ', ...square, '; carTo = ', ...carTo);
  }
  crane(amount, carFrom, carTo, square);
}
strategy([40,30,20,10]);
//====================================
// let a = 100;
// function a() {}//SyntaxError: Identifier 'a' has already been declared
//====================================
// destruction
//====================================closures, example

//this
function hello() {
  console.log('Hello!', this);
}
const edward = {
  name: 'Edward',
  age: 47,
  greeting: hello
}
hello();
edward.greeting();

//====================================call, apply, bind
//edward.greetingWindow = hello.bind(Window);
edward.logInfo = function(job, phone) {
  console.group(`${this.name} info`)
  console.log(`Name is ${this.name}`);
  console.log(`Age is ${this.age}`);
  console.log(`Job is ${job}`);
  console.log(`Phone is ${phone}`);
  console.groupEnd();
};
//edward.greetingWindow();
edward.logInfo();
const ivan = {
  name: 'Ivan',
  age: 25
}
const ivanInfoLogFunction = edward.logInfo.bind(ivan);
ivanInfoLogFunction('Frontend', '0693456789');
edward.logInfo.call(ivan, 'Frontend', '0693456789');
edward.logInfo.apply(ivan, ['Frontend', '0693456789']);
///////////////////////////////////////
const someArray = [1,2,3,4,5];
Array.prototype.multBy = function(mult) {
  return this.map((item) => item * mult);
}
console.log(someArray.multBy(5));
//how to bind context to a arrow function