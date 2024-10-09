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
var a = 10;
var b = 20;
var c = 60;
var ans = 0;
console.log(ans = a > b ? (a > c ? a : c) : b > c ? b : c);
