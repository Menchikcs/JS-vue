let age = +prompt("What is your age?");
let day = +prompt("1 — будній, 2 — вихідний");
let ticket = 0;
switch (day) {
    case 1: ticket = 200; break;
    case 2: ticket = 250; break;
    default: alert("Помилка: неправильний тип дня"); break;
}
let sale = 0;
if (age >= 60){
    sale = 0.4;
} else if (age >= 18){
    sale = 0;
} else if (age >= 8){
    sale = 0.5;
} else{
    sale = 1;
}
let price = ticket - (ticket * sale);
alert(`Вік: ${age}\n` + `День: ${day}\n` + `Результат: ${price} грн`);