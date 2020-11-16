/* // 赋值默认值
let arr = [10]
let [a, b = 0] = arr
console.log(a, b);
 */
// a,b 互换值
let a = 10,
    b = 20;
console.log(a, b);
[b, a] = [a, b]
console.log(a, b);