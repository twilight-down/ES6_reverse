function _deepClone(obj) {
    if (obj === 'null') return null;
    // 基本数据类型 函数也返回
    if (typeof obj !== 'object') return obj;
    if (Object.prototype.toString.call(obj) === '[object Date]') return new Data(obj);
    if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj);
    // 动态创建啊对象类型
    let result = new obj.constructor;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) break;
        result[key] = _deepClone(obj[key])
    }
    return result

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