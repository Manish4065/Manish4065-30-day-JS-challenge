// Taking input fron user
// const { Console } = require('node:console');
// const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(`enter a number! `, number => {
//     if (number>0) {
//         console.log("number is positive");
//     }
//     if(number<0){
//         console.log("number is negative");
//     }
//      else {
//         console.log("number is Zero");
//     }
//     rl.close();
// });


let age = 19

    if (age >= 18  &&  age <= 120) {
        console.log("you are eligible for vote ");
    }
    else if(age > 0  &&  age < 18){
        console.log("you are not eligible for vote");
    }
     else {
        console.log("enter valid age");
    }


    let a, b, c

    a = 2
    b = 3
    c = 4

    if (a >= b) {
        if (a>=c) {
            console.log(`largest number is ${a}`)
        }
        else{
            console.log(`largest number is ${c}`)
        }
    } else {
        if (b>=c) {
            console.log(`largest number is ${b}`)
        }
        else{
            console.log(`largest number is ${c}`)
        }
    }


    let day = 2

    switch (day) {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;
        
        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            break;

        case 7:
            console.log("Sunday");
            break;
        default:
            Console.log("enter valid day number");
            break;
    }


    let score = 85
    
    switch (true) {
        case (score >= 90) :
            console.log("Grade A");
            break;

        case (score >= 80) :
            console.log("Grade B");
            break;

        case (score >= 60) :
            console.log("Grade C");
            break;
        
        case (score >= 40) :
            console.log("Grade D");
            break;

        case (score < 40 && score >=0) :
            console.log("Grade F");
            break;
            
        default:
            Console.log("enter valid score");
            break;
    }


    let num = 7

    num%2 == 0 ? console.log(`${num} is even number`) : console.log(`${num} is odd number`)


    let year=1900;

    if (year % 400 == 0) {
        console.log(`${year} is leep year`);
    }
    else if ((year % 4 == 0) && (year % 100 != 0)) {
        console.log(`${year} is leep year`);
    } 
    else {
        console.log(`${year} is not leep year`);
    }