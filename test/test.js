function test(x ='hello'){
   console.log(x);
}
test('hiiii');
//arrow
let test2 = (x = 'hello') => {
    console.log(x);
}
test2('h2');

let test3 = () => (5);
console.log(test3());
let test4 = () =>{
    return 5;
}
console.log(test4());

// destructuring assignment
let x = [11,22,33];
let y = [...x,55]

console.log(x);
console.log(y);

let obj = {
    name: 'phap',
    age: 20,
    score: 10
}
let obj2 = {
    ...obj,age : 21,firstName: 'le'
};
console.log(obj);
console.log(obj2);

let {score} = obj;
export default obj;

