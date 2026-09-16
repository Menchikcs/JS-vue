// let num = 5;
// while(num >= 1) {
//     console.log(num);
//     num --;
// }

// let userNumber = +prompt("Enter your number");
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt("Error. Enter your number");
// }
// console.log(userNumber);
//
// Number()
// String()
// isNaN()
// console.log(Number('7'));
// console.log(Number('hello'));

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age <= 0 || age >= 100) {
//     age = +prompt("Enter your age");
// }
// console.log(age);

// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
//
// while (attempt < 3 && pin !== correctPin) {
//     pin = +prompt('Enter a valid pin');
//     attempt ++;
// }
// if (pin === correctPin) {
//     console.log('Доступ дозволено')
// } else {
//     console.log('Картку заблоковано')
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let userPassword = +prompt('Enter your Password');
//     if (userPassword === password) {
//         console.log('Доступ дозволено');
//         break;
//     }
//     console.log('Try again')
//     attempt++;
// }

//_______________________________________
// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let userPassword = +prompt('Enter your Password');
//     if (userPassword === password) {
//         console.log('Доступ дозволено');
//         break;
//     }
//     console.log(`Try again. ${3-attempt} attempts left`);
//     attempt++;
// }

// let menuChoice;
// do{
//     menuChoice = +prompt('Оберіть дію:\n' +
//     '1 - Переглянути профіль\n' + '2 - Налаштування\n' + '0 - Вихід');
//     if (menuChoice === 1){
//         alert('Відкриваємо профіль')
//     } else if(menuChoice === 2){
//         alert('Відкриваємо налаштування')
//     } else if(menuChoice === 0){
//         alert('Вихід')
//     } else {
//         alert('Невідомий вибір')
//     }
// } while (menuChoice !== 0);

//____________________________________
// let menuChoice;
// while (menuChoice !== 0) {
//     menuChoice = +prompt('Оберіть дію:\n' +
//         '1 - Переглянути профіль\n' + '2 - Налаштування\n' + '0 - Вихід');
//     switch (menuChoice) {
//         case 0: alert('Вихід'); break;
//         case 1: alert('Відкриваємо профіль'); break;
//         case 2: alert('Відкриваємо налаштування'); break;
//         default: alert('Невідомий вибір'); break;
//     }
// }

// let count = 1, sum = 0;
// while (count <= 5) {
//     let currentGrade = +prompt(`Enter Grade № ${count}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert('Не корректна оцінка');
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);

// let count = 1;
// let score = 0;
// while (count <= 5) {
//     let questions = '', answers = '';
//     switch (count) {
//         case 1: questions = 'Як створювати змінну'; answers = 'let'; break;
//         case 2: questions = 'Який оператор строгої рівності'; answers = '==='; break;
//         case 3: questions = 'Як позначається оператор and'; answers = '&&'; break;
//         case 4: questions = 'Як завершити цикл'; answers = 'break'; break;
//         case 5: questions = 'Як записати інкремент'; answers = '++'; break;
//     }
//     let answer = prompt(`Запитання № ${count} is 5\n ${questions}`);
//     if (answer === ''){
//         console.log('Відповідь не може бути пустою')
//         continue;
//     }
//     if (answer === answers){
//         alert('Good Job');
//         score++;
//     }
//     else {
//         alert('Wrong Answer');
//     }
//     count++;
// }
// if (score === 5){
//     alert('Відмінно')
// } else if (alert >= 3){
//     alert('Норм')
// } else {
//     alert('Lox')
// }

//______________________________________________________
let age = +prompt("Enter your age");
while (Number.isNaN(age || age < 12 || age > 90)) {
    age = +prompt("Enter your age");
}
let correctPin = 4321, attempt = 1;
while (attempt <= 3){
    let pin = +prompt('Enter your pin');
    if (pin === correctPin) {
        let menuChoice;
        do{
            menuChoice = +prompt('Оберіть дію:\n' +
                '1 - Особистий кабінет\n' + '2 - Повідомлення\n' + '3 - Налаштування\n' + '0 - Вихід');
            switch (menuChoice) {
                case 0: alert('Вихід'); break;
                case 1: alert('Відкриваємо особистий кабінет'); break;
                case 2: alert('Відкриваємо повідомлення'); break;
                case 3: alert('Відкриваємо налаштування'); break;
                default: alert('Такого пункту немає'); break;
            }
        } while (menuChoice !== 0);
        break;
    }
    if (attempt < 3){
        alert(`Try again. ${3 - attempt} attempts left`)
    } else {
        alert('No attempts left. Try again later.')
    }
    attempt ++;
}