let arr1 = [10, 20, { name: 'andy' }];




let arr2 = [...arr1];
let arr3 = arr1.slice(0)
let arr4 = JSON.parse(JSON.stringify(arr1))


arr1[0] = 2
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr4[2] === arr1[2]);