function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:boolean,b:boolean):boolean;

function add(a:any,b:any):any{
    return a+b;
}

console.log(add("hello","world"));
console.log(add(20,10));
console.log(add(true,false));