/*let a=10;
let b=20;
let c=30;
let ans=0;

if(a>b){             
    if(a>c){
         ans=a;
    }
    else{
        ans=c;
    }
}else if(b>c){
    ans=b;
}
else{
  ans=c;
}
*/

// for the above code ternary operator is

let a=10;
let b=20;
let c=60;
let ans=0;

console.log(ans= a>b ? (a>c ? a : c) : b>c ? b:c);


