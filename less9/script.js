// let prices = [120, 23, 45, 60, 55]
// console.log(prices[1]);
//
// prices[1] = 50;
//
// console.log(prices.length);
// let sum = 0
// for (let i = 0; i < prices.length; i++){
//     sum += prices[i]
// }
// console.log(sum);

// function getTotalPrices(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i]
//     }
//     return sum;
// }
// let prices = [120, 23, 45, 60, 55]
// let limit = 50;
// let result = getTotalPrices(prices);
// console.log(result);

function Parnist (numbers) {
    let parni = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            parni.push(numbers[i])
        }
    }
    return parni
}
let n = +prompt('How many numbers?')
let numbers = []
for (j = 1; j <= n; j++) {
    let k = +prompt('What number?')
    numbers.push(k)
}
let result = Parnist(numbers)
console.log(`Всі числа: ${numbers}`)
console.log(`Парні: ${result}`)