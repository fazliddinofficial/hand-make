
let arr = [3, 5, 32, 5, 2, 1, 45, 6, 76];


function choose(newFunc, total) {
    let acc = null;
    for (var i = 0; i < arr.length; i++) {
        acc = newFunc(acc, arr[i], i, arr);
    }
    return acc;
}


let newArr2 = choose(function (acc, value, index, arr) {
    return acc + value;
}, []);
console.log(newArr2);