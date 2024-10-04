
// var student : any;
// student={
//     fname:"Rahul",
//     lname:"M",
//     age:21
// };
// console.log(student);
// console.log(student.fname);

// /*----------------------------------------------------------------------------------------------*/

// let classroom:String[]=["class-1:60","class-2:62",""];
// console.log(typeof(classroom));                         //in JS array is an object
// console.log(classroom.length);

// /*----------------------------------------------------------------------------------------------*/

// let employeDetails: {name:string;age:number;userId:number}[]=[
//     {name:"aaa",age:22,userId:2622},
//     {name:"aab",age:22,userId:2621}];
//     console.log(employeDetails[1].name);

// /*----------------------------------------------------------------------------------------------*/

// type Student={name:String; rollno:string;department:string};

// let studentDetails:Student[]=[
//     {name:"ababc",rollno:"21ucs019",department:"cse"},
//     {name:"ababd",rollno:"21ucs020",department:"cse"}
// ]
// console.log(studentDetails[0].name);
  
/*----------------------------------------------------------------------------------------------*/

import { Employee } from "./types/export_object";

let employeesNone:Employee[]|null=null;

let employees:any[]=
[
    {age:26,isMajor:true},
    {name:"aabbd",age:28,isMajor:true},
    {name: undefined, age:22,isMajor:null},
    {isMajor:true,age:33}
    
 ];


 let newEmployees:Employee[]=employees as Employee[];
 console.log(employees[3]);
 console.log(newEmployees[0]);

 /*----------------------------------------------------------------------------------------------*/