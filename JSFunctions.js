    //Functions
function first_fun(){
    console.log("This is my first function")
}
first_fun();

    //Function stored in a variable
var  my_name = function hello(){
    console.log("Nagarash")
}
my_name();

    //Anonymous function
const my_any = function (){
    console.log("This is an anonymous function")
}
my_any()

    //Arrow function
hello=()=>{
    console.log("This is an arrow function")
}
hello();

//shorter arrow
let hi = "";
hi = () => "This is a shorter arrow function";
console.log(hi());