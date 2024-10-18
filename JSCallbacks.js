
    //Callbacks

    function myDis(some){
        console.log(some)
      }
        
      function myCal(num1, num2, myCallback){
          let sum = num1 + num2
          myCallback(sum)
      }
        
      myCal(5, 5, myDis)
      
        //setTimeout
      setTimeout(myfunc, 2000)
      myfunc2()
      
      function myfunc(){
        console.log("I love JS !!")
      }
      
      function myfunc2() {
          console.log("I love ml!!")
        }