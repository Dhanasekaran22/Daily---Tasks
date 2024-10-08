class StudentDetails{
   originalName="rahul M";
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
studentDetails.studentName="Rahul";

console.log(studentDetails.studentName)
