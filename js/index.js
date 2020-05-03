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
for ( var i = 0; i < 10; i++ ) {
    (function(i) {
        setTimeout(() => console.log(i), 0);
    })(i);
}
//====================================
const row = ['qwer', 'hjkl', 'qwerewq', 'hjklkjh'];
const palindrom = [];
row.forEach((item) => {
    if ( item.split('').reverse().join('') === item ) palindrom.push(item);});
console.log('palindrom: ', ...palindrom);