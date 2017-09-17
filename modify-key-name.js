var a = {
    a: 1,
    b: 2,
    c: 3
};

b = {};

console.log(Object.keys(a));

Object.keys(a).map(function (key) {
    if (key === 'c') {
        return b['f'] = a[key];
    }
    return b[key] = a[key];
});

console.log(b);
//原始方式  旨在了解Object.keys的实现方案


const object = {
    name: "zhangpei",
    age: 20,
    sex: "女"
}

let {name: myName, age: myAge, sex: gender} = object
//  左边变量用于匹配Object中的key 右边用于赋值将object[key]赋予右边变量
console.log("解构结果:", {myName, myAge, gender});
//然后重新构造一个对象