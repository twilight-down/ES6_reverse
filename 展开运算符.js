// 数组克隆 （展开运算符）
let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1]
console.log(arr2);

fn.call(obj, ...arr1) // fn(1,2,3,4)
    //   =>
fn.apply(obj, arr1)