let saveBtn = document.getElementById("saveBtn");
let saveStatus = document.getElementById("saveStatus");

saveBtn.addEventListener("click", function() {
    saveStatus.textContent = "Зміни успішно збережено!";
    saveStatus.classList.add("success");
    saveBtn.textContent = "Збережено";
});

let usernameInput = document.getElementById("username");
let greeting = document.getElementById("greeting");

usernameInput.addEventListener("input", function() {
    let name = usernameInput.value.trim();
    if (name === "") {
        greeting.textContent = "Вітаємо, гостю!";
    } else {
        greeting.textContent = "Вітаємо, " + name + "!";
    }
});

let infoBtn = document.getElementById("infoBtn");
let infoBlock = document.getElementById("infoBlock");

infoBtn.addEventListener("click", function() {
    infoBlock.classList.toggle("hidden");

    if (infoBlock.classList.contains("hidden")) {
        infoBtn.textContent = "Показати додаткову інформацію";
    } else {
        infoBtn.textContent = "Приховати додаткову інформацію";
    }
});

let themeBtn = document.getElementById("themeBtn");
let card = document.getElementById("profileCard");

themeBtn.addEventListener("click", function(){
    card.classList.toggle('dark');
    if (card.classList.contains('dark')) {
        themeBtn.textContent = 'Світла тема'
    } else {
        themeBtn.textContent = 'Темна тема'
    }
})