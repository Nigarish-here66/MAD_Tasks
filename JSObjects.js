
    //JS objects
    const car = {type:"Fiat", model:"500", color:"white"}
    console.log(car)
    console.log(car.model)
    
        //Destructing
    const obj = { a: 1, b: 2 }
    const { a, b } = obj
    console.log(a)
    
        //Spread operator
    const person = { name : 'Nagarash' , age :20, isMarried : false,}
    const person2={...person , salary:10000}
    console.log(person2)