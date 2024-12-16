let a:number[]=[1,2,3,3,4];
a.forEach((n)=>{
    console.log(n);
});

a.forEach((n,index)=>{
    console.log(n,index);
});

a.forEach((n,index,originalArray)=>{
    console.log(n,index,originalArray);
});