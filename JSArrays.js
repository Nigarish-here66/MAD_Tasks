    //Empty array to fill data later
const ary = []
ary[0] = 1
ary[1] = 'Nagarash'
console.log(ary)

    //Array with data
let ary1 = ['Nagarash', 3]
console.log(ary1)

    //Array with new keyword
let ary3 = new Array(1,2,3,4,5,6)
console.log(ary3)

    //Methods
ary3.map((a)=>{
    console.log(a)
})

    //Method filter
const names = ['Esha' , 'Rahat' , 'Manahil', 'Esha' ]
let filtered=names.filter((name)=>
{
return name != 'Esha'
});
console.log(filtered)