
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