// let age = prompt("Enter your age");
// let access = confirm("Are you registered?");
// if (age >= 18 && access === true){
//     alert("Welcome!");
// } else {
//     alert('Not welcome')
// }

// let role = prompt("What is your role?");
// switch (role) {
//     case "teacher": alert('Welcome'); break;
//     case "admin": alert('Welcome'); break;
//     default: alert('Not welcome'); break;
// }

// let access = confirm('Are you registered?');
// let age = Number(prompt('Enter your age'));
// if (access === true) {
//     if (age >= 18) {
//         alert('You are logged in!');
//     } else {
//         alert('You are too young');
//     }
// } else {
//     alert('Register first');
// }

// let age = Number(prompt('Enter you age'));
// if (age >= 18) {
//     alert('Adult');
// } else if (age >= 14) {
//     alert('Teenager');
// } else if (age >= 6) {
//     alert('Schoolboy');
// } else {
//     alert('Kid')
// }

// let age = Number(prompt('Enter you age'));
// if (age >= 18) {
//     alert('Access granted');
// } else if (age >= 16) {
//     let access = confirm('Do you have permission?');
//     if (access){
//         alert('Access granted');
//     } else{
//         alert('Access denied');
//     }
// } else{
//     alert('Access denied');
// }

const sale = 0.1;
let product = prompt("What is the product you want?");
let price = Number(prompt("Enter your price"));
let amount = Number(prompt("Enter amount"));
let registered = confirm('Are you registered?')
let promo = prompt("Enter your promo number");
const realpromo = 'sale';
let VIP = confirm('Are you VIP?');

if (price*amount >= 1000 && registered === true && (promo === realpromo || VIP === true)){
    alert(`Sale is granted. Price is ${(price-price*sale)*amount} uah`)
} else {
    alert(`No sale for you loser. Price: ${price*amount} uah`)
}

