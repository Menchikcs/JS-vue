// alert('Hello')
// let age = 18;
// const name = 'Ivan';
// console.log(age);
// console.log(name);
//
// age = 19;

// const name = 'Ivan';
// let number = 0;
// let isTrue = false;
//
// console.log(typeof name); //typeof дає тип змінної (string, number)

// + -
// * / %
// **

// const name = prompt("What is your name?");
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// console.log(Number(num1) + Number(num2));
// console.log((num1 - 0) + (num2 - 0));
//
// let num3 = 100;
// console.log(typeof String(num3))

let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let quantity = Number(prompt("Enter your quantity"));
let deliveryCost = Number(prompt("Enter your delivery cost"));

let sale = 0.1;
let newPrice = price - (price * sale)

let totalCost = newPrice * quantity + deliveryCost;

console.log(`Product ${productName} is ${totalCost}`);
alert(`Product: ${productName}
\nCost: ${totalCost} grn`);