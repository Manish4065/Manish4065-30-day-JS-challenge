console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 % 2);

let num1 = 9
let num2 = 8
num1 += 3
num2 -= 3
console.log(num1,num2);

console.log(2 > 3);
console.log(2 < 3)
console.log(2 >= 3);
console.log(2 <= 3);
console.log(2 == 3);
console.log(2 === 3);

if (num1 > num2 && 3 > 2) {
    console.log("both condition true ");
}else{
    console.log("either one or both condition false")
}

if (num1 < num2 && 3 > 2) {
    console.log("both condition true ");
}else{
    console.log("either one or both condition false")
}

if (num1 < num2 || 3 > 2) {
    console.log("one or both condition true");
}else{
    console.log("both condition false")
}

if (num1 < num2 || 3 < 2) {
    console.log("one or both condition true");
}else{
    console.log("both condition false")
}

console.log(!true);

num1 > num2 ? console.log(`${num1} is greater than ${num2}`) : console.log(`${num1} is less than ${num2}`);

num1 < num2 ? console.log(`${num1} is greater than ${num2}`) : console.log(`${num1} is less than ${num2}`);