let cars = 0;
do{
    cars = +prompt('How many cars (1-7)')
} while (cars <= 0 || cars > 7)
let suma = 0, correct = 0, electro = 0, dorogo=0;
for (let i=1; i<=cars; i++) {
    let hours = +prompt('Hours to stay?')
    let car = +prompt('тип автомобіля:\n' +
        '   1 — звичайний;\n' +
        '   2 — електромобіль.')
    if (hours === 0){
        break;
    } else if (hours < 0 || hours > 12){
        alert('Wrong hours');
        continue;
    }
    let price = 0;
    switch(car){
        case 1: price = 40; correct++; break;
        case 2: price = 30; correct++; electro++; break;
        default: alert('ERROR'); break;
    }
    let total = price * hours
    if (hours >= 5){
        total = total - (total * 0.2)
    }
    suma += total;
    if (total > dorogo){
        dorogo = total;
    }
}
console.log(`кількість правильно оброблених автомобілів: ${correct}`);
console.log(`кількість електромобілів: ${electro}`);
console.log(`загальна сума оплати: ${suma} грн`);
console.log(`найбільша оплата за один автомобіль: ${dorogo} грн`);
