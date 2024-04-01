console.log('NA bat dau hoc');
//setTimeout(()=> {
    //console.log('NA học xong');
  //  console.log('Na đi ngủ');  
//},500
//);

let prom = new Promise ((resolve,reject) => {
    setTimeout(()=> {
        console.log('NA học xong');
        resolve()  
    },500)   
})
prom.then(() => {
    console.log('Na đi ngủ');
})

let arr = [11,22,33,44];
let s = 0;
arr.map(item=> {
  console.log(item);

 s+= item
})
console.log(s);
let brr = arr.filter(item => item >30);
console.log(brr);
let crr = arr.filter((item,index) => {
item = item+20
return item>50
})
console.log(crr);
