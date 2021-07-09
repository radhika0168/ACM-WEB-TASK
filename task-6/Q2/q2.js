let sum;

var a = parseFloat(prompt("Enter first value: "));
var b  = parseFloat(prompt("Enter 2nd value: "));
var c = prompt("Enter operator: ");
 
switch(c){
    case "+":
         sum = a+b;
        console.log(sum);
        break;

    case "-":
        sum = a-b;
        console.log(sum);
        break;

    case "*":
        sum = a*b;
        console.log(sum);
        break;

    case "/":
        sum = a/b;
        console.log(sum);
        break;

    case "%":
        sum = a%b;
        console.log(sum);
        break;
    
        default:
            console.log("Invalid operator");
            break;

}