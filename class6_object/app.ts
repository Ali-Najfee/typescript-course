// Object ->like dictionary in Python
// Like Ordinary concept in JavaScript
// let Teacher={
//     name:"Amina",
//     class:10,
//     section:'A',
//     salary:30000,
// }
// console.log("Name : " + Teacher.name+"\nClass : " + Teacher.class+"\nSection : " + Teacher.section);
// console.log("\nDataype");
// Let talk in TypeScript
// Type Annotation is auto assigned by TypeScript
// console.log("Name : " + typeof Teacher.name+"\nClass : " + typeof Teacher.class+"\nSection : " + typeof Teacher.section); 


// Let declare type by own
// Type -> assign to object
let Teacher;
type Teacher={
    name:string,
    class:string|number,
    section:string|number,
    salary:number|string
}
Teacher ={
    name:"Ali",
    class:10,
    section:'A',
    salary:"Fifty Thousands"
}

// Special Typing
let Student:any;
type Student={
    name:string,
    class:string|number,
    // Optional type
    CGPA?:number
}
Student={
    name:"Student",
}
