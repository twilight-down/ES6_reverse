let arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15, [16, 17, 18, [19, 20, 21, 22, [23, 24]]]]]]]]
let arr2 = arr1.flat(Infinity)
console.log(arr2);
console.log(arr1.flat(Infinity));