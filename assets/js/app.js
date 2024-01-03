const nextQuoteBtn = document.querySelector('.next-quote-btn');
const tag = document.querySelector('.tags');
const quoteContent = document.querySelector('.quote-content');
const cardAuthor = document.querySelector('.card-author');
const body = document.querySelector('body');

async function fetchQuotesSubjects(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data
}
let counter = 0;

body.style.background = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${counter})`;

nextQuoteBtn.addEventListener('click',async function(){
    const data = await fetchQuotesSubjects();
    tag.innerText = `${data.tags}`;
    quoteContent.innerText = `${data.content}`;
    cardAuthor.innerText = `${data.author}`;
    counter ++;
    body.style.background = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${counter})`;

})
