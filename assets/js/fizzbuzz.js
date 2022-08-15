function makeResponse(message, placeholder) {
    console.log(message);
    let dom = document;
    dom.getElementById("message").innerHTML=message;
    dom.getElementById("input-number").placeholder=placeholder;
    dom.getElementById("input-number").value=null;
}


let button = document.getElementById('check-button');

button.addEventListener('click', function (event){
    let inputNumber = parseInt(document.getElementById('input-number').value, 10);
    
    if (Number.isInteger(inputNumber) == false) {
        var notNumberMessage = `Something went wrong!`;
        var notNumberPlaceholder = `Insert a number`;
        makeResponse(notNumberMessage, notNumberPlaceholder);
    }else {
        if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
            var FizzBuzzMessage = `FizzBuzz`;
            var FizzBuzzPlaceholder = inputNumber;
            makeResponse(FizzBuzzMessage, FizzBuzzPlaceholder);
        } else if (inputNumber % 3 == 0 ) {
            var FizzMessage = `Fizz`;
            var FizzPlaceholder = inputNumber;
            makeResponse(FizzMessage, FizzPlaceholder);
        } else if (inputNumber % 5 == 0 ) {
            var BuzzMessage = `Buzz`;
            var BuzzPlaceholder = inputNumber;
            makeResponse(BuzzMessage, BuzzPlaceholder);
        } else {
            makeResponse(inputNumber, inputNumber);
        } 
    }
});
