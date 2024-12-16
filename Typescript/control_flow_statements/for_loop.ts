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
for(const element of circles){
    area=Math.floor(Math.PI *element*element);
    areas.push(area);
}
console.log(areas); 