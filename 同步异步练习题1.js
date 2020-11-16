setTimeout(() => {
    console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 10); // 3.10ms的任务先到达时间 
console.log(4);
console.time()
for (let i = 0; i < 90000000; i++) { //1. 此时循环结束，原本放在任务队列的两个宏任务都已经到达了执行条件
    //65ms                            （但此时任务还是无法执行，因为主栈中的任务还没执行完，线程还被占用着）
}; //                                 给定时器一个时间并不是时间到达就执行，可能需要延后执行
console.timeEnd()
console.log(5);
setTimeout(() => {
    console.log(6);
}, 8);
console.log(7);
setTimeout(() => {
    console.log(8);
}, 15);
console.log(9); // 2. 主栈执行完 线程空闲下来了 去event queue中执行为微任务和宏任务

// 2 4 5 7 9 3 1 6 8