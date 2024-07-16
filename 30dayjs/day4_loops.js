for (let i = 1; i <= 10 ; i++) {
    console.log(i);
}

for (let i = 1; i <= 10 ; i++) {
    console.log(i*5);
}

let i = 1
let sum = 0;
while (i<=10) {
    sum+=i
    i++
}
console.log(sum);

let j = 10
while (j>=1) {
    console.log(j);
    j--
}

let k = 1
do {
    console.log(k);
    k++
} while (k<=5);


let num = 8
let factnum=1
let l =1
do {
    factnum *= l
    l++
    
} while (l <= num);
console.log(factnum);


for(let i = 1; i <= 5; i++){
for (let j = 1; j <= i; j++) {
    process. stdout. write("* ");
}
console.log("");
}



for (let i = 1; i <= 10 ; i++) {
    if(i == 5)
        continue
    console.log(i);
}

for (let i = 1; i <= 10 ; i++) {
    if(i == 7)
        break
    console.log(i);
}