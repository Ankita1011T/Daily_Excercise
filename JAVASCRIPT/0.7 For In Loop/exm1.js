// For in loop
let student = {
    name:"Ankita Tribhuvan",
    age:  16,
    cgpa: 9.1,
    ispass: true,
};
for (let key in student) {
    console.log("key =", key ,"value = ",student[key]);  
}