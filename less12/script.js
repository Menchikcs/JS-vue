// function isHighScore(score) {
//     return score >= 10;
// }
// let scores = [7, 12, 8, 9, 10, 5]
//
// let highScore = scores.filter(isHighScore)
// console.log(highScore)


// let scores = [7, 12, 8, 9, 10, 5]
// let highScore = scores.filter(score => score >= 10)
// console.log(highScore)

// let courses = [
//     {id: 1, title: 'HTML', price: 700, description: 'HTML description', active: true},
//     {id: 2, title: 'CSS', price: 300, description: 'CSS description', active: true},
//     {id: 3, title: 'JavaScript', price: 400, description: 'JS description', active: false},
//     {id: 4, title: 'Vue', price: 800, description: 'JS description', active: true},
// ]
// let found = courses.find(course => course.id === 3)
// console.log(found)
// if (found !== undefined) {
//     console.log(found.title)
// } else {
//     console.log('No such course')
// }
// let activeCourse = courses.filter(course => course.active === true);
// let lowCost = courses.filter(course => course.price <= 400);
// console.log(lowCost)
// console.log(activeCourse)
//
// let title = courses.map(course => course.title);
// let salePrice = courses.map(course => course.price * 0.9);
// // console.log(`Початкові дані: ${courses}`)
// console.log(`Назви курсів: ${title}`)
// console.log(`Оновлена вартість курсів: ${salePrice}`)
//
// let search = courses.filter(course => course.title.includes('Script'));

// function isAvailable(book){
//     return book.available === true
// }
// let books = [
//     {id: 1, title: "HTML для початківців", author: 'Олена Класна', year: 2024, available: true},
//     {id: 2, title: "JavaScript для початківців", author: 'Олена Прекрасна', year: 2022, available: false},
//     {id: 3, title: "CSS для початківців", author: 'Олена Жінка', year: 2022, available: true},
//     {id: 4, title: "HTML+CSS+JavaScript для початківців", author: 'Іван Крутий', year: 2024, available: false},
// ]
// let userIdBook = +prompt('Enter user ID');
// let searchBookId = books.find(book => book.id === userIdBook);
// let availableBooks = books.filter(isAvailable);
// let title = books.map(book => book.title).join(', ');
// let js = books.filter(book => book.title.includes('JavaScript'));
//
// console.log(searchBookId);
// console.log(title);
// console.log(js);

// Домашнє _______________________________________________

let courses = [
    {id: 1, title: 'HTML для початківців', category: 'Frontend', price: 700, duration: 20, rating: 4.5, available: true},
    {id: 2, title: 'CSS Advanced', category: 'Frontend', price: 900, duration: 25, rating: 4.8, available: true},
    {id: 3, title: 'JavaScript Basics', category: 'Frontend', price: 1200, duration: 40, rating: 4.9, available: false},
    {id: 4, title: 'Vue.js Framework', category: 'Frontend', price: 1500, duration: 35, rating: 4.7, available: true},
    {id: 5, title: 'Python for Beginners', category: 'Backend', price: 1000, duration: 45, rating: 4.6, available: true},
    {id: 6, title: 'Node.js Development', category: 'Backend', price: 1600, duration: 30, rating: 4.4, available: false},
    {id: 7, title: 'UI/UX Design Fundamentals', category: 'Design', price: 800, duration: 20, rating: 4.3, available: true},
    {id: 8, title: 'Digital Marketing', category: 'Marketing', price: 500, duration: 15, rating: 4.0, available: true}
];
// 1
function findCourseById(courses, id) {
    return courses.find(course => course.id === id);
}
// 2
function getCoursesByCategory(courses, category) {
    return courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
}
// 3
function getCoursesByMaxPrice(courses, maxPrice) {
    return courses.filter(course => course.price <= maxPrice);
}
// 4
function searchCoursesByTitle(courses, search) {
    return courses.filter(course => course.title.toLowerCase().includes(search.toLowerCase()));
}
// 5
function getCourseTitles(courses) {
    return courses.map(course => course.title).join(', ');
}
// 6
function getCoursesWithSale(courses) {
    return courses.map(course => ({
        title: course.title,
        salePrice: course.price * 0.85,
        originalPrice: course.price
    }));
}
// 7
function sortCoursesByPriceAsc(courses) {
    return courses.slice().sort((a, b) => a.price - b.price);
}
// 8
function sortCoursesByRatingDesc(courses) {
    return courses.slice().sort((a, b) => b.rating - a.rating);
}
// 9
function sortCoursesByTitleAlphavit(courses) {
    return courses.slice().sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
}
// 10
function getAvailableCoursesStats(courses) {
    let availableCourses = courses.filter(course => course.available);
    if (availableCourses.length === 0) {
        return { total: 0, average: 0 };
    }
    let total = 0;
    for (let course of availableCourses) {
        total += course.price;
    }
    let average = total / availableCourses.length;
    return { total, average };
}

let userChoice;
do {
    userChoice = +prompt(
        "Оберіть операцію з каталогом курсів:\n" +
        "1 - Пошук курсу за ID\n" +
        "2 - Курси за категорією\n" +
        "3 - Курси за макс. вартістю\n" +
        "4 - Пошук за назвою\n" +
        "5 - Список назв курсів\n" +
        "6 - Ціни зі знижкою 15%\n" +
        "7 - Сортування за ціною (зростання)\n" +
        "8 - Сортування за рейтингом (спадання)\n" +
        "9 - Сортування за назвою (алфавіт)\n" +
        "10 - Статистика доступних курсів\n" +
        "0 - Вихід"
    );

    if (userChoice === null) {
        break;
    }

    switch (userChoice) {
        case 1:
            let idInput = +prompt("Введіть ID курсу (1-8):");
            let foundCourse = findCourseById(courses, idInput);
            if (foundCourse) {
                console.log("Знайдений курс:", foundCourse);
                alert(`Знайдено курс: ${foundCourse.title} (Ціна: ${foundCourse.price} грн)`);
            } else {
                alert("Курс із таким ID не знайдено!");
            }
            break;

        case 2:
            let catInput = prompt("Введіть категорію (Frontend, Backend, Design, Marketing):");
            let catResult = getCoursesByCategory(courses, catInput);
            if (catResult.length > 0) {
                console.log(`Курси категорії ${catInput}:`, catResult);
                alert(`Знайдено курсів: ${catResult.length}. Дивіться консоль.`);
            } else {
                alert("У цій категорії немає курсів або вона введена некоректно.");
            }
            break;

        case 3:
            let priceInput = +prompt("Введіть максимальну суму:");
            let priceResult = getCoursesByMaxPrice(courses, priceInput);
            if (priceResult.length > 0) {
                console.log(`Курси вартістю до ${priceInput}:`, priceResult);
                alert(`Знайдено курсів: ${priceResult.length}. Дивіться консоль.`);
            } else {
                alert("Немає курсів із такою або нижчою ціною.");
            }
            break;

        case 4:
            let queryInput = prompt("Введіть частину назви курсу:");
            let searchResult = searchCoursesByTitle(courses, queryInput);
            if (searchResult.length > 0) {
                console.log("Результати пошуку за назвою:", searchResult);
                alert(`Знайдено курсів: ${searchResult.length}. Дивіться консоль.`);
            } else {
                alert("Порожній результат пошуку.");
            }
            break;

        case 5:
            let titles = getCourseTitles(courses);
            console.log("Назви курсів:", titles);
            alert(`Назви курсів: ${titles}`);
            break;

        case 6:
            let sales = getCoursesWithSale(courses);
            console.log("Курси зі знижкою 15%:", sales);
            alert("Ціни зі знижкою виведено в консоль.");
            break;

        case 7:
            let sortedPrice = sortCoursesByPriceAsc(courses);
            console.log("Сортування за зростанням ціни:", sortedPrice);
            alert("Відсортовано за ціною. Дивіться консоль.");
            break;

        case 8:
            let sortedRating = sortCoursesByRatingDesc(courses);
            console.log("Сортування за спаданням рейтингу:", sortedRating);
            alert("Відсортовано за рейтингом. Дивіться консоль.");
            break;

        case 9:
            let sortedAlpha = sortCoursesByTitleAlphavit(courses);
            console.log("Сортування за алфавітом:", sortedAlpha);
            alert("Відсортовано за алфавітом. Дивіться консоль.");
            break;

        case 10:
            let stats = getAvailableCoursesStats(courses);
            console.log(`Статистика доступних курсів: Загальна вартість = ${stats.total}, Середня вартість = ${stats.average.toFixed(2)}`);
            alert(`Загальна вартість доступних курсів: ${stats.total}\nСередня вартість: ${stats.average.toFixed(2)}`);
            break;

        case 0:
            alert("Роботу програми завершено.");
            break;

        default:
            alert("ERROR! Будь ласка, оберіть пункт від 0 до 10.");
    }
} while (userChoice !== 0 && userChoice !== undefined);