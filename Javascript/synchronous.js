/*
In JavaScript, synchronous code is executed on a single thread, which means only one task can be
executed at a time. This is in line with the blocking nature of synchronous execution: if a task takes
time to complete, subsequent tasks will have to wait.
*/

const longTask=()=>{
    const start=Date.now()
    while(Date.now() - start <5000){
        //
    }
    console.log("Long Task Finished");
}

console.log("Task 1: Start");
longTask();
console.log("Task 2 : En");