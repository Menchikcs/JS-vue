let clubs = [
    {
        id: 1,
        name: 'Бомжи',
        category: 'Мистецтво',
        price: 300,
        members: 12,
        active: true,
    },
    {
        id: 2,
        name: 'Велике Айті',
        category: 'IT',
        price: 567,
        members: 52,
        active: false,
    },
    {
        id: 3,
        name: 'Черепашкі',
        category: 'Мистецтво',
        price: 400,
        members: 15,
        active: true,
    },
    {
        id: 4,
        name: 'Шахтар',
        category: 'Спорт',
        price: 350,
        members: 20,
        active: false,
    },
    {
        id: 5,
        name: 'Веброзробка',
        category: 'IT',
        price: 1000,
        members: 10,
        active: true,
    }
];

let choice;

do {
    choice = +prompt("Оберіть пункт меню:\n" +
    "1 - Показати всі гуртки\n" +
    "2 - Знайти гурток за ID\n" +
    "3 - Записати учасника\n" +
    "4 - Змінити статус набору\n" +
    "5 - Додати новий гурток\n" +
    "6 - Показати статистику\n" +
    "0 - Вихід"
);
    switch (choice) {
        case 1: {
            if (clubs.length === 0) {
                alert("Каталог порожній!");
                break;
            }

            let statusText
            let text = 'Список гуртків: \n'
            clubs.forEach(function (club) {
                if (club.active === true) {
                    statusText = 'Відкрито набір'
                } else {
                    statusText = 'Набір закрито'
                }
                text += `ID: ${club.id}\n` +
                    `Назва: ${club.name}\n` +
                    `Напрям: ${club.category}\n` +
                    `Ціна: ${club.price} грн/міс\n` +
                    `Учасників: ${club.members}\n` +
                    `Набір: ${statusText}\n` +
                    `-------------------------\n`;
            })
            alert(text);
            break;
        }
        case 2: {
            let searchID = +prompt('Enter club ID')
            if (searchID === null) break;
            let foundClub;

            for (let club of clubs) {
                if (club.id === searchID) {
                    foundClub = club;
                }
            }
            if (foundClub) {
                let statusText = foundClub.active ? "Відкрито" : "Закрито";
                alert(
                    `Знайдено гурток:\n` +
                    `ID: ${foundClub.id}\n` +
                    `Назва: ${foundClub.name}\n` +
                    `Напрям: ${foundClub.category}\n` +
                    `Ціна: ${foundClub.price} грн\n` +
                    `Кількість учасників: ${foundClub.members}\n` +
                    `Статус набору: ${statusText}`
                );
            } else {
                alert("Гурток із таким ID не знайдено!");
            }
            break;
        }
        case 3: {
            let IDInput = +prompt('Enter ID')
            if (isNaN(IDInput)) {alert('ERROR'); break;}

            for (let club of clubs) {
                if (club.id === IDInput) {
                    if (club.active === false) {
                        alert("Набір до цього гуртка наразі закрито.");
                        break;
                    }
                    let isConfirmed = confirm(`Бажаєте записати учасника до гуртка "${club.name}"?`);
                    if (isConfirmed) {
                        club.members++;
                        alert(`Успішно! Кількість учасників оновлено. Нова кількість: ${club.members}`);
                    } else {
                        alert("Операцію скасовано.");
                    }
                    break;
                }
            }
            break;
        }
        case 4: {
            let idInput = +prompt('Enter ID')
            if (idInput === null) break;

            for (let club of clubs) {
                if (club.id === idInput) {
                    let status
                    if (club.active === true) status = 'Відкрито набір';
                    else status = "Закрито набір";
                    let isConfirmed = confirm(`Поточний статус: ${status}\n` + "Бажаєте змінити?");
                    if (isConfirmed) {
                        club.active = !club.active;
                        if (club.active === true) status = 'Відкрито набір';
                        else status = "Закрито набір";
                    } else {
                        alert("Операцію скасовано.");
                    }
                }
            }
            break;
        }
        case 5: {
            let name = prompt('Введіть назву нового гуртка:')
            if (name === '') { alert('ERROR'); break; }

            let category = prompt('Введіть напрям (IT, спорт, мистецтво):');
            if (category === '') { alert('ERROR'); break; }

            let newPrice = +prompt('Введіть вартість занять за місяць (грн):')
            if (isNaN(newPrice) || newPrice < 0) { alert('ERROR'); break; }

            let membersInput = +prompt("Введіть початкову кількість учасників:")
            if (isNaN(membersInput) || membersInput < 0) { alert('ERROR'); break; }

            let newID = 1, maxID = clubs[0].id
            for (let club of clubs) {
                if (club.id > maxID) {
                    maxID = club.id;
                }
            }
            newID = maxID + 1;

            let newClub = {
                id: newID,
                name: name,
                category: category,
                price: newPrice,
                members: membersInput,
                active: true,
            }
            clubs.push(newClub);
            alert(`Гурток "${name}" успішно додано до каталогу (ID: ${newID})!`);
            break;
        }
        case 6: {
            if (clubs.length === 0) {
                alert("Каталог порожній, статистику неможливо розрахувати.");
                break;
            }

            let totalClubs = clubs.length;
            let activeClubsCount = 0;
            let totalMembers = 0;
            let totalPriceSum = 0;

            clubs.forEach(function (club) {
                if (club.active) {
                    activeClubsCount++;
                }
                totalMembers += club.members;
                totalPriceSum += club.price;
            });

            let averagePrice = totalPriceSum / totalClubs;
            alert(
                `Статистика каталогу:\n\n` +
                `Загальна кількість гуртків: ${totalClubs}\n` +
                `Гуртків із відкритим набором: ${activeClubsCount}\n` +
                `Сумарна кількість учасників: ${totalMembers}\n` +
                `Середня вартість занять: ${averagePrice} грн`
            );
            break;
        }
        case 0: {
            alert("Вихід із програми. До побачення!");
            break;
        }

        default: {
            alert("ERROR\n" + "Невірний пункт меню. Будь ласка, оберіть цифру від 0 до 6.");
            break;
        }
    }
} while (choice !== 0)