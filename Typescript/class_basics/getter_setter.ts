class StudentDetails{
   originalName="Dhanasekaran M";
    name: any;

    set studentName(name){
        this.originalName=name;
        // console.log(this.originalName);
    }

    get studentName(){
        return this.originalName;
    }
    
    
}

const studentDetails=new StudentDetails();
console.log(studentDetails.studentName)

//by changing the value , using setter
studentDetails.studentName="Rahul M";
console.log(studentDetails.studentName)
