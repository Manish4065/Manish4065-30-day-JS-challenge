function evenOdd(number){
    if(number%2==0)
        console.log("even number");
    else
    console.log("odd number");
}
evenOdd(5);
evenOdd(4);

function squareOfNumber(number) {
    return number*number;
}
console.log(squareOfNumber(6));

function maxOfTwoNumber(number1,number2) {
    if(number1>number2)
        console.log(`${number1} is greater than ${number2}`);
    else if (number2>number1) 
        console.log(`${number2} is greater than ${number1}`);
    else
        console.log("Both numbers are equal");

}

maxOfTwoNumber(2,8);
maxOfTwoNumber(4,4);

const squareOfNumber1 = (num1, num2) => {
return num1+num2;
}
console.log(squareOfNumber1(3,5));


const findString=(stringName) => {
   if(stringName.includes('s'))
    return true;
    else
    return false;
}

console.log(findString("manish"));


const productOfNumber = (num1, num2=2) => {
    return num1*num2;
    }
    console.log(productOfNumber(6,5));
    console.log(productOfNumber(6));


    const GreetMessage = (name, age=18) => {
        console.log(`hey my name is ${name} and my age is ${age}`)
        }

        GreetMessage("manish",21);
        GreetMessage("manish");

// higher orger function
function n0OfTimes(name, num){
    for (let i = 0; i < num; i++) {
        name()
    }
}

function printName(){
    console.log("manish")
}

n0OfTimes(printName,3);



function mainFunction(func1,func2,radius){
    return func2(func1(radius));
}

function diameter(radius){
    return radius*2;
}

function perimeter(radius){
    return Math.PI*radius;
}

console.log(mainFunction(diameter, perimeter, 3));


