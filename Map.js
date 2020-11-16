/* let n = {
    x: 10
}
let obj = {
    id: 1
}
obj[n] = 10
console.log(obj); */


let n = {
    x: 10
}
let obj = new Map();
obj.set(n, 10)
console.log(obj);