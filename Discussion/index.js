
//lets create a function that will count to a series of number depending on the input of the user.

//get the value of the input field. in order to get the value of the input, using a dot(.) notation call out it's value property.
//selection control structure

 //THERE ARE 5 WAYS to select elements (5 DOM selectors)
    //1. getElementByTagName()     //collective through the use of the element/tag name
    //2. getElementByClassName()   //collective through the use of their class attributes. 
    //3. getElementById()          //select a distinct/specific through the use of it's id attribute.
    //4. querySelector()           //neutral/versatile selection.
    //5. querySelectorAll()        //collective approach when selecting multiple components/elements at once.

    function countUsingWhile() {
        let input1 = document.getElementById('task1').value;
        if (input1 <= 0) {
            //NOT VALID
          //inform the user that the input is not Valid.
          //innerHTML property.
      
          let msg = document.getElementById('message');
          msg.innerHTML = 'Value Not Valid'; 
        } else {
          //VALID
          while (input1 !== 0) {
             //what will happen if the condition has not/been met.
           alert(input1);
           input1-- //decrease the value of the input by 1 per iteration of the loop.
          }
        }
      }
      
      
      //lets create a function that will count to a series of number depending on the value inserted by the user.
      
      function countUsingDoWhile() {
          //get the input of the user.
          let number = document.getElementById('task2').value;
          //we have to make sure that the value is valid(we wont be accepting any values that are <= 0)
          if (number <= 0) {
            //the value is NOT VALID. 
            //inform the user that he/she cannot proceed. 
            //using DOM selectors we will target the container element. 
            let displayText = document.getElementById('info');
            displayText.innerHTML = 'The number is Not Valid!';
      
          } else {
            //PROCEED because the value is VALID.
            // syntax: 
            //   do {
            //   	//body of the loop
            //   } while (condition)
            //task: will be to count from 1 to n (depending on the value inserted by the user.)
            let indexStart = 1; 
            //the block of code identified here will be executed first. 
            let displayText = document.getElementById('info');
            displayText.innerHTML = number + ' is Valid';
            do {
                alert('count value: ' + indexStart); //for us to display the changes in the value of the indexStart variable.
                indexStart++ //a value of 1 was added because the value was incremented. 
            } while (indexStart <= number);
      
          }
          //7:30 PM
      }
      
      //[SECTION] For Loop
      
       // syntax: for (initialization; expression/condition; finalExpression/iteration) {
       //   //statement of procudures
       // } 
      
      
       //TASK: count to a series number depending on the value inserted by the user. 
       function countUsingForLoop() {
      
           //get the input from the user first using DOM selector.
           let data = document.getElementById('task3').value;
       
          let res = document.getElementById('response');
           //validate if the value of the data is what we desire.
           if (data <= 0) {
            //notify the user
            res.innerHTML = 'Input Invalid'; 
           } else {
                    //initialization; condition; iteration/finalExp
              for (let startCount = 0; startCount <=  data; startCount++) {
                  //since the start of the count started with 0 then for every iteration we should add a value of 1 to eventually meet the condition and terminate the process.
                  //describe what will happen per iteration
                  alert('This is the value in this iteration: ' + startCount); //print the each value of each iteration before the process terminates. 
              }
           } 
      
       }
      
       //[SECTION] How to access elements of a string using repetition control structures? 
      
      
      
      
      function accessElementsInString() {
         //get the input of the user. using DOM selectors
         let name = document.getElementById('userName').value;
      
         let textLength = document.getElementById('stringLength');
         // alert(typeof name); this is just a checker
      
         //validate and make sure that input is NOT equivalent to blank. 
         if (name !== '') {
           //response if truthy (valid)
           
            //analyze the value that was inserted by the user.
               //1. determine the length of the string. 
                  //=> invoke the "length" property of a string using (.) notation. 
            textLength.innerHTML = 'The string is ' + name.length + ' characters long'; 
            
            //Upon accessing elements inside a string, this can be done so, using [] square brackets. 
            //keep in mind we can access each element through the use of it's index number/count
            //the count will start from 0 (first character inside the string corresponds to the number 0), the next is 1 and up to the "nth" number
                // console.log(name[0]);
                // console.log(name[1]);
                // console.log(name[2]);
                // console.log(name[3]);
                // console.log(name[4]);
                // console.log(name[5]);       
                // console.log(name[6]);
            //we will now use the concept of loops in order to produce a much more flexible response for the user's input
                //initialization ; condition ; iteration
            for (let startIndex = 0; startIndex < name.length; startIndex++) {
                 //access each element and display it inside the console
                 alert(name[startIndex]); 
            }
         } else {
            //response if falsy 
            alert('value is Invalid'); 
         }  
      }
      