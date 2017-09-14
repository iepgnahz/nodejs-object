const object1 = {
    name: "zhangpei",
    age: 20,
    gender: "woman"
};

delete object1.gender;

if (object1.gender) {
    console.log('gender 存在');
}

console.log(object1, object1.gender);


const object2 = {
    name: "zhangpei",
    age: 20,
    sex: "woman"
};

object2.gender = undefined;

if (object2.gender) {
    console.log('gender 存在');
}
console.log(object2, object2.gender);


const array = [1,2,3,4,5];
delete array[2];
console.log(array[2]);
console.log(array);
//delete 删除数组中的元素

