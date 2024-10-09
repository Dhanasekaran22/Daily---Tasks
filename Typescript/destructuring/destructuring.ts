let a=10;
let b=20;

[b,a]=[a,b];
console.log("a =",`${a}`,"b =",`${b}`)

//--------------------------------------------------------------------------------------

const users=[
    {id:1,name:"aaa",age:22},
    {id:2,name:"bbb",age:22},
    {id:3,name:"ccc",age:23}
];

users.forEach(({id,name})=>{
    console.log(`Id: ${id}, Name: ${name}`);
})
