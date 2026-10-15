// let book = {
//     title: 'Кобзар',
//     author: 'Тарас Шевченко',
//     year: '1840',
//     price: 500,
//     availability: true
// }
// console.log(book.title)

let books = [
    {
        id: 1,
        title: 'Кобзар',
        author: 'Тарас Шевченко',
        year: '1840',
        price: 500,
        availability: true
    },
    {
        id: 2,
        title: 'Лісова пісня',
        author: 'Леся Українка',
        year: '1911',
        price: 450,
        availability: true
    },
    {
        id: 3,
        title: 'Тигролови',
        author: 'Іван Багряний',
        year: '1943',
        price: 550,
        availability: false
    },
    {
        id: 4,
        title: 'Місто',
        author: "Валер'ян Підмогильний",
        year: '1943',
        price: 550,
        availability: false
    }
]
// console.log(books[2])
// for(let book of books){
//     console.log(`[${book.id}]: ${book.title}, ${book.author}, ${book.year}, ${book.price} грн\n`)
// }
// books.forEach(function(book){
//     console.log(book.title)
// })

let availableCount = 0;
let totalPrice = 0;
for (let book of books) {
    if (book.availability === true) {
        availableCount++;
        totalPrice+= book.price;
    }
}
console.log(availableCount);
console.log(totalPrice);

books.push({
    id: 5,
    title: 'Захар Беркут',
    author: 'Іван Франко',
    year: '1882',
    price: 500,
    availability: true
})
console.log(books.length);
idBooks = +prompt('Enter book ID');
let foundbook = null;
for (let book of books) {
    if (book.id === idBooks) {
        foundbook = book;
        break;
    }
}
if (foundbook !== null) {
    let status = 'Немає у наявності';
    if (foundbook.availability === true) {
        status = "У наявності"
    }
    alert(`${foundbook.title}, ${foundbook.author}, ${foundbook.year}, ${foundbook.price} грн\n ${status}`);
} else {
    alert('Книжки з таким айді немає')
}