function test(arg) {
    console.log(arguments);
    console.log(arg);
    var arg = 'hello';

    function arg() {
        console.log('hello world')
    }
    console.log(arg);
}
test('hi');