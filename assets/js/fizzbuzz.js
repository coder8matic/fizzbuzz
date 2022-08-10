let button = document.getElementById('check-button');

button.addEventListener('click', function (event){
    let inputNumber = parseInt(document.getElementById('input-number').value, 10);
    
    if (Number.isInteger(inputNumber) == true && inputNumber % 3 == 0 && inputNumber % 5 == 0) {
        console.log("FizzBuzz");
        document.getElementById("message").innerHTML=`FizzBuzz!`;
        document.getElementById("input-number").placeholder=`${inputNumber}`;
        document.getElementById("input-number").value=null;
    } else if (Number.isInteger(inputNumber) == true && inputNumber % 3 == 0 ) {
        console.log("Fizz");
        document.getElementById("message").innerHTML=`Fizz!`;
        document.getElementById("input-number").placeholder=`${inputNumber}`;
        document.getElementById("input-number").value=null;
    } else if (Number.isInteger(inputNumber) == true && inputNumber % 5 == 0 ) {
        console.log("Buzz");
        document.getElementById("message").innerHTML=`Buzz!`;
        document.getElementById("input-number").placeholder=`${inputNumber}`;
        document.getElementById("input-number").value=null;
    } else if (Number.isInteger(inputNumber) == true) {
        console.log("Buzz");
        document.getElementById("message").innerHTML=`${inputNumber}`;
        document.getElementById("input-number").placeholder=`${inputNumber}`;
        document.getElementById("input-number").value=null;
    } else {
        console.log('Something went wrong')
        document.getElementById("message").innerHTML=`Something went wrong!`;
        document.getElementById("input-number").placeholder=`Insert a number`;
        document.getElementById("input-number").value=null;
    }
});
