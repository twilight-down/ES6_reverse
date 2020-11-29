function _deepClone(obj) {

    //对数据类型进行检测 
    if (obj === 'null') return null;
    // if (typeof obj === 'function') return
    // 基本数据类型和函数都返回 函数无需克隆
    if (typeof obj !== 'object') return obj;
    // 如果是正则  克隆一份
    if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj)
        // 如果是日期格式
    if (Object.prototype.toString.call(obj) === '[Object Date]') return new Date(obj)


    // obj.constructor 找到的是所属类原型上的constructor，而原型上的constructor指向的是类本身 
    let newObj = new obj.constructor; //用他来动态创建数组或者对象 保证类型一致
    for (let key in obj) {
        // 排除后添加在原型链上的方法
        if (!obj.hasOwnProperty(key)) break;
        // 如果某一项是引用值，我们还需要进一步迭代循环，把引用值的每一项也进一步克隆
        newObj[key] = _deepClone(obj[key])
    }
    return newObj
}
let arr1 = [10, 20, { name: 'andy' }, /^123456$/, function() {}];
let arr2 = _deepClone(arr1)
console.log(arr2);

let obj1 = {
    name: 'andy',
    corse: [1, 2, 3],
    teacher: {
        a: 'anna',
        b: 'mike'
    }
}

let obj2 = _deepClone(obj1)
obj1['name'] = 'mike'
obj1.teacher.a = 'lisa'
console.log(obj2);
console.log(obj1);