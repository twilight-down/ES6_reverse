setTimeout(function() {
    console.log(1);
});
Promise.resolve(function() {
    console.log(2);
}).then(resolve => {
    console.log(resolve);
})

new Promise(function(resolve) {
    console.log(3);
    // resolve(console.log('AAAA'));
    // resolve(console.log('AAA'));
    resolve(function() {
        console.log('QWE');
    })
}).then(function() {
    console.log(4);
});
console.log(5);