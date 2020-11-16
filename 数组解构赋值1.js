let arr = [10, 20, 30, 40];
let [a, b, c, d] = arr; //全部结构赋值
let [m, , n] = arr //只解构出第一个和第三个
let [o, ...p] = arr //拿到第一个 剩余的放在一个数组当中
let [s] = arr.reverse(); //拿到对应的最后一个
console.log(a, b, c, d); // 10 20 30 40
console.log(m, n); //10 30
console.log(o, p); // 10 [ 20, 30, 40 ]
console.log(s); //  40