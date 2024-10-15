/*
const toArray=(x:any,y:any,z:any)=>{
    return [x,y,z];                         //this is not the best practice so we go for generics
}                                           // we can reuse the code in generics in abest way compare to any  
                                            // any is also a reusable code
const numberArray=toArray(5,10,15);
console.log(numberArray);

*/

//generics

//single type

const toArrayGeneric=<T>(x:T,y:T,z:T):T[] =>{

    return [x,y,z]
}

let genericArray=toArrayGeneric<number>(1,2,3);
console.log(genericArray);
console.log(typeof(genericArray));

// multiple type

let printValue=<X,Y,Z>(a:X,b:Y,c:Z,d:string)=>{
    console.log(`a is ${typeof(a)} b is ${typeof(b)} c is ${typeof(c)}`)
};

printValue("Rahul",7,true,"demo");

