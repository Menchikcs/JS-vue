// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan']
// names.push('Mariia');
//
// names.pop() // видаляє останній
// names.unshift('Pavlo'); // додає в початок списку
// names.shift() // видаляє перший
//
// let names2 = names.slice(1, 3) // 3 не включно
//
// console.log(names);
// console.log(names2);

// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan']
// let deleted = names.splice(2,1)
// console.log(deleted)
//
// names.splice(1, 0, 'Seva') // через сплайса можна и додати
// names.splice(0, 1, 'Tetiana', 'Nadiia')
// console.log(names)

// function register(name) {
//     if (name.trim() === ''){     // trim видаляє всі пробіли
//         alert('Please enter your name')
//         return;
//     }
//     let exists = false;
//     for (let i = 0; i < event.length; i++) {
//         if(event[i] === name){
//             exists = true;
//         }
//     }
//     if (exists) {
//         alert(`Учасник вже зареєстрований: ${name}`)
//         return;
//     }
//     event.push(name);
//     alert(`Зарееєстровано участника: ${name}`)
//     console.log(event)
// }
// function remove(name) {
//     let index = -1;
//     for (let i = 0; i < event.length; i++) {
//         if(event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert('Такого учасника немає')
//     }
//     else {
//         event.splice(index, 1);
//         alert(`Учасника видалено: ${name}`)
//         console.log(event)
//     }
// }
// function length(){
//     alert(`Всього учасників: ${event.length}`)
// }
// let event = ['Ann', 'Oleksandra', 'Olesia', 'Ivan']
//
// register('Slavik')
// register('Ann')
// register('    ')
// remove('Ann')
// length()

// let names = ['Ann', 'Oleksandra', 'Olesia', 'Ivan']
// // for (let i = 1; i < names.length; i++) {
// //     console.log(names[i])
// // }
// // for (let name of names) {  // зручний коли тільки значення
// //     console.log(name)
// // }
// names.forEach(function (name, index){   // зручний для дії над кожним елементов
//     console.log(`${index}: ${name}`)                         // (можна і індекс витягти)
// })

// __________________N1____________________________________
let names = ["Марія", "Олександра", "Влад", "Іван", "Павло"]
names.push('Влада')
names.unshift('Всеволод')
names.pop()
names.splice(2, 1, "Єгор")
for (let i = 1; i < names.length; i++) {
    console.log(`${i}: ${names[i]}`)
}
for (let name of names) {
    console.log(name)
}
names.forEach(function (name) {
    console.log(`${name} length: ${name.length}`)
})

//______________N2______________________
let prices = [120, 250, 180, 300, 150, 400]
let sum = 0, more200 = 0;
for (let price of prices) {
    sum += price
}
for (let i = 0; i < prices.length; i ++) {
    if (prices[i] >= 200) {
        more200++
    }
}
let avg = sum / prices.length
console.log(prices)
console.log(`Сума квитків: ${sum}`)
console.log(`Квитків від 200 грн: ${more200}`)
console.log(`Середня ціна квитка: ${avg}`)