// function name(аргументи){
//     код
// }

// function showMessage() {
//     alert("Hello World!");
// }
//
// showMessage();

// function showInfo() {
//     console.log('В гостях у Марійки')
//     console.log('Магазин працює з 8:00 до 23:00');
// }
// function showProducts(name, price, quantity) {
//     console.log(`Марійка продає: ${name}`);
//     console.log(`Ціна: ${price} грн за шт`);
//     console.log(`Загальна вартість: ${price*quantity} грн`);
// }
// showInfo();
// showProducts("Пральний порошок", 800, 5);

// function calculateTotal(price, count) {
//     return price * count;
// }
// let total = calculateTotal(800, 3);
// console.log(total);

// function discount(total) {
//     if (total >= 5000) {
//         return 10
//     } else {
//         return 0
//     }
// }
// let discount1 = discount(1000)
// let discount2 = discount(6000)
// console.log(discount1)
// console.log(discount2)

// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 15;
//     } else if (total >= 5000) {
//         return 10;
//     } else if (total >= 2000) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * (percent/100);
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt('Enter product name');
// let productPrice = +prompt('Enter price');
// let productCount = +prompt('Enter count');
// let productTotal = getProductTotal(productPrice, productCount);
// let productPercent = getDiscount(productTotal);
// let productDiscount = getDiscountValue(productTotal, productPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscount);
//
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${productPrice} грн`);
// console.log(`К-сть ${productCount} шт`);
// console.log(`Сума ${productTotal} грн`);
// console.log(`Знижка ${productPercent}%`);
// console.log(`Сума зі знижкою ${productFinalPrice} грн`);

//__________________________________________________________________________
function calculate(price, count) {
    return price * count
}
function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15
    } else if (total >= 1000) {
        return 10
    } else if (total >= 500) {
        return 5
    } else {
        return 0
    }
}
function calculateTicketDiscount(total, percent) {
    return total * (percent/100)
}
function ticketFinalPrice(total, discount) {
    return total - discount
}
let ticketPrice = +prompt('Whats the price')
let ticketCount = +prompt('Whats the count')
let ticketTotal = calculate(ticketPrice, ticketCount)
let ticketPercent = getTicketDiscount(ticketTotal)
let ticketDiscount = calculateTicketDiscount(ticketTotal, ticketPercent)
let ticketTotalPrice = ticketFinalPrice(ticketTotal, ticketDiscount)

console.log(`Ціна: ${ticketPrice} грн`)
console.log(`К-сть: ${ticketCount} шт`)
console.log(`Сума: ${ticketTotal} грн`)
console.log(`Знижка: ${ticketPercent} %`)
console.log(`Загальна ціна: ${ticketTotalPrice} грн`)
