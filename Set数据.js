let arr = [1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 2, 2]
console.log(new Set(arr)); //生成的并不是一个数组 而是一个类数组

// 将他转换为数组
arr1 = [...new Set(arr)]
arr2 = Array.from(new Set(arr))
console.log(arr1);
console.log(arr2);