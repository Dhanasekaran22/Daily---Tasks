interface Calculate<T>{
   add(x:T,y:T):T;
   addString(x:T,y:T):T;
    
}

class ArithmeticOperation implements Calculate<number|string>{
    add(x: number, y: number): number {
        return x+y;
    }

    addString(x:string,y:string):string{
        return x+y;
    }
}

const arithmeticOperation=new ArithmeticOperation();
console.log(arithmeticOperation.add(5,10));
console.log(arithmeticOperation.addString("Ra","hul"));

// generic constraints

class ConstraintForAdd{
    addNumbers=<T extends number>(x:T,y:T)=>{  // if we didn't use the extend keyword it shows error
        return x+y;                            // in type we didn't perform the + operator without the constraint
    }
}

const constraintForAdd = new ConstraintForAdd();
const result=constraintForAdd.addNumbers(5,6);
console.log(result);



