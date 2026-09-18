let menuChoice, basePrice=0;
do{
    menuChoice = +prompt('Оберіть дію:\n' +
        '1 - Кіно\n' + '2 - Театр\n' + '3 - Концерт');
    switch (menuChoice) {
        case 1: alert('Кіно — 150 грн'); basePrice=150; break;
        case 2: alert('Театр — 220 грн'); basePrice=220; break;
        case 3: alert('Концерт — 350 грн.'); basePrice=350; break;
        default: alert('Некоректна подія');
    }
} while (menuChoice !== 1 && menuChoice !== 2 && menuChoice !== 3);

let dayType = 0;
do{
    dayType = +prompt("Оберіть тип дня:\n1 — будній\n2 — вихідний (+15% до вартості)");
} while (dayType !== 1 && dayType !== 2);
if (dayType === 2){
    basePrice *= 1.15;
}

let ticketCount = 0, tickets = 0, free = 0,
    discounted = 0, fullprice = 0, totalSum = 0;
while (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 6) {
    ticketCount = +prompt("Введіть кількість квитків (від 1 до 6)");
}
for (let i = 1; i <= ticketCount; i++) {
    let age;
    while (isNaN(age) || age < -1 || age >= 100) {
        age = +prompt(`Введіть вік відвідувача для квитка №${i} (або -1 для скасування)`)
    }
    if (age === -1) {
        alert('Оформлення квитків перервано')
        break;
    }

    tickets ++;

    let discount = 0;
    if (age >= 60){
        discount = 25;
    } else if (age >= 18) {
        discount = 0;
        if (age <= 25){
            let StudentCard = confirm('Чи є у вас студентський квиток?')
            if (StudentCard){
                discount += 10;
            }
        }
    } else if (age >= 13) {
        discount = 20;
    } else if (age >= 6) {
        discount = 50;
    } else {
        discount = 100;
    }

    if (discount === 100){
        free++;
        console.log(`Квиток ${i}: Безкоштовно`);
        continue;
    }

    if (discount > 0){
        discounted++;
    } else {
        fullprice++;
    }

    let ticketPrice = Math.round(basePrice * (1 - discount / 100));
    totalSum += ticketPrice;
    console.log(`Квиток №${i} ${ticketPrice} грн (знижка ${discount}%)`);
}
let extraDiscount = false;
if (totalSum>1000){
    extraDiscount = true;
    totalSum = totalSum * 0.95
}

console.log(`Кількість оброблених квитків: ${tickets}`);
console.log(`З них безкоштовні: ${free}`);
console.log(`Зі знижкою: ${discounted}`);
console.log(`За повною ціною: ${fullprice}`);
if (extraDiscount) {
    console.log('Була використана додаткова знижка 5% за замовлення понад 1000 грн')
}
console.log(`Сума: ${totalSum} грн`);