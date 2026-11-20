let news = [
    {   category: 'JavaScript',
        title: 'JavaScript for child',
        description: 'The JavaScript library for javaScript',
        date: '20.11.2026'},
    {   category: 'Design',
        title: 'Дизайн для чайників',
        description: 'Design for little kids',
        date: '13.11.2026'},
]

let newsList = document.getElementById('news-list');
let newsCount = document.getElementById('news-count');

function renderNews(items){
    let card = document.createElement('article');
    card.classList.add('news-card');

    let tag = document.createElement('span');
    tag.classList.add('tag');
    tag.textContent = items.category;

    let title = document.createElement('h2');
    title.textContent = items.title;

    let description = document.createElement('p');
    description.textContent = items.description;

    let date = document.createElement('small');
    date.textContent = items.date;

    card.append(tag, title, description, date);
    newsList.append(card);
}

renderNews(news);