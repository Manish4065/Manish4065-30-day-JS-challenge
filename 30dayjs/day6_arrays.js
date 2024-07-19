const arr=[1,2,3,4,5]
console.log(arr);

let sizeOfarrary=arr.length;

console.log(arr[0], arr[sizeOfarrary-1]);

arr.push(6);
arr.push(7);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);


// const newArr=arr.map((num) =>  num*2);
// or
const newArr=arr.map((num) => {
    return  num*2});
console.log(newArr);

const newArray1=arr.filter((num) => {
    if(num%2==0)
        return num;
})
console.log(newArray1);


let initialValue=0;
const sumOfArrayElement=arr.reduce((accumulator,currValue) => accumulator+currValue, initialValue)
console.log(sumOfArrayElement);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
});

const twoDimenArr=[[1,2], [4,3], [5,9]];
console.log(twoDimenArr);

console.log(twoDimenArr[1][0]);
