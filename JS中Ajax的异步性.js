// xhr状态
// UNSEND:0  创建完默认是0
// OPENED:1   已经完成OPEN操作
// HEADERS_RECEIVED:2     服务器以及把响应头信息返回了（响应头内容少 响应主体内容多）
// LOADING:3     响应主体正在返回中
// DONE:4       响应主体已经返回
// xhr.open 第三个参数控同步异步指的是从当前send发送请求 算任务开始 一直到状态任务4才算结束
// 同步指的是在此期间所有的任务都不去处理
// 异步指的是在此期间 其余任务正常处理（会把这个请求的任务放在EventQueue中）

let xhr = XMLHttpRequest;
xhr.open('get', 'url', true); // true 代表异步请求  false代表同步 默认值为true异步请求
xhr.onreadystatechange = function() {
    // 监听到状态改变才会触发的时间
    console.log(xhr.readyState); // => 2 3 4 
}
xhr.send();