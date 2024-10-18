console.log('hello')

    //Expressions
var name1 = "Nagarash"
var name2 = "Nagarash"
    
    //Varibales
var name = "Nagarash"
let age = 20;
const gender = "female"

    //Global vs local scope
function my_name()
{
    //Local
    var my_name1="Nagarash Fateh"

    //Using global variable
    console.log(name)
    console.log("name inside function", my_name1)
}
my_name()
console.log("name outside function")

    //Block scope
function hello_world(){
        let my_name2 = "Nigarish Fateh"
    if (2<3){
        const my_name3 = "Nigarishh Fatehh"
    console.log("i can access my_name3 here")
    console.log(my_name3)
    }
    console.log("i can't access my_name3 here")
    console.log(my_name3)
}
hello_world();
console.log("i can't access my_name3 here", my_name3)


