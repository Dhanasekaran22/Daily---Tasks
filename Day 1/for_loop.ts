//for loop

let ranks=["A","B","C"];
for(let i=0;i<ranks.length;i++){
    console.log(ranks[i]);
}

//for each loop
let names:string[]=["Rahul","Arul","Aswin","balaji"];
names.forEach(function(name,nam){
    console.log(name,nam);
});

let circles=[20,30,40];
let areas:number[]=[];
let area=0;
for(let i=0;i<circles.length;i++){
    area=Math.floor(Math.PI *circles[i]*circles[i]);
    areas.push(area);
}
console.log(areas);