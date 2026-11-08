let enrollBtn = document.getElementById("enrollBtn");
let status = document.getElementById("status");
enrollBtn.addEventListener("click", function(){
    alert('Кнопку натиснуто')
    status.textContent = 'Ви успішно записані на курс';
    status.classList.add('success');
    enrollBtn.textContent = 'Запис оформлено';
});

let studentsName = document.getElementById("studentsName");
let welcome = document.getElementById("welcome");

studentsName.addEventListener("input", function(){
    let name = studentsName.value.trim();
    if (name === ''){
        welcome.textContent = 'Вітаємо, гостю'
    } else {
        welcome.textContent = 'Вітаємо, ' + name + '!';
    }
})
let format = document.getElementById("format");
let price = document.getElementById("price");

format.addEventListener("change", function(){
    let selectPrice = Number(format.value)
    price.textContent = selectPrice + "грн";
})

let detailBtn = document.getElementById("detailBtn");
let details = document.getElementById("details");

detailBtn.addEventListener("click", function(){
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = 'Показати опис'
    } else {
        detailBtn.textContent = 'Приховати опис'
    }
})

let card = document.getElementById("card");
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){
    card.classList.toggle('dark');
    if (card.classList.contains('dark')) {
        themeBtn.textContent = 'Світла тема'
    } else {
        themeBtn.textContent = 'Темна тема'
    }
})