let arr = [3, 5, 32, 5, 2, 1, 45, 6, 76];


// arr.reduce(function (acc,value, index, arr) {
//     console.log(acc);
// });

let newArr = arr.filter(function (value, index, arr) {
    return value > 30;
});
console.log(newArr);
