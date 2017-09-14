var a = {
    a:1,
    b:2,
    c:3
};

b={};

console.log(Object.keys(a));

Object.keys(a).map(function (key) {
    if(key === 'c'){
        return b['f'] = a[key];
    }
    return b[key] = a[key];
});

console.log(b);