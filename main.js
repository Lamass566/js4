let fNumber = Number(prompt("first number"));
let sNumber = Number(prompt("second number"));

let operation = prompt("operation", "+ , - , * , /");

function mathOperation(fNumber, sNumber, operation)
{
    let sum;
    switch(operation)
    {
        case "+":
            sum = fNumber + sNumber
            break;
        
        case "-":
            sum = fNumber - sNumber
            break;

        case "*":
            sum = fNumber * sNumber
            break;

        case "/":
            sum = fNumber / sNumber
            break;
    }
    return fNumber + " " + operation + " " + sNumber + " = " + sum;
}

let value = mathOperation(fNumber, sNumber, operation);

alert(value);