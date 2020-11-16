console.log(1);
setTimeout(() => {
    console.log(2);
}, 50);
console.log(3);
setTimeout(() => {
    console.log(4);
    while (1 === 1) {}
}, 0);
console.log(5);