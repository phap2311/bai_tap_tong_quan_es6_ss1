//Destructuring
//bai 1
let arr = [1,2,3,4,5];
let [firstElement,secondElement,...rest] = arr;
console.log(firstElement);
console.log(secondElement);
//bai2
let person = {
    name : 'phap',
    age: 26,
    adderss : {
        city : 'Đà Nẵng',
        country : 'USA'
    }

}
let {adderss:{city}} = person;  
console.log(city);
//Spread Syntax
// bai1
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(arr3);

// bai2
let originalArray = [1,2,3,4];
let copiedArray = [...originalArray];
console.log(copiedArray);

//bai3
let obj1 = {
    a:1,
    b:2
}
let obj2 = {
    c:3,
    d:4
}
let obj3 = {...obj1,...obj2};
console.log(obj3);
//bai 4
let originalObject = {
    name: 'phap',
    age : 19,
    classes: '12A3'
}
let copiedObject = {...originalObject};
console.log(copiedObject);
// bai 5
let obj5 = {
    name: 'A',
    age : 20
}
let obj6 = {
    ...obj5,
    name : 'B',
    score : 20
    
}
console.log(obj6);
// Map, filter
//1
let studentList = [
    {id:1,name:'phap',age: 25,score:7.0},
    {id:2,name:'dat',age: 20,score:8.0},
    {id:3,name:'nhat',age: 15,score:9.0},
    {id:4,name:'dung',age: 30,score:10.0},
    {id:5,name:'mai',age: 28,score:9.7}
];
let totalScore = 0;
studentList.map(student => 
    {
        totalScore +=  student.score
    });
    console.log(totalScore);
///2 tìm trong tên có chữ M
let mList = studentList.filter(student => student.name.toLowerCase().includes('m'));
console.log(mList);
//3 xóa theo id 
let idToDelete = 1;
let updateList = studentList.filter(student => student.id !== idToDelete);
console.log(updateList);     
