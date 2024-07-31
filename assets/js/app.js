const nextQuoteBtn = document.querySelector('.next-quote-btn');
const tag = document.querySelector('.tags');
const quoteContent = document.querySelector('.quote-content');
const cardAuthor = document.querySelector('.card-author');
const body = document.querySelector('body');

const numbersArray = []

function checkPreviousRandomNumbers(number,initialValue,endValue){
    if(numbersArray.length > 0){
        const searchedNumber = numbersArray.find((num) => num === number);
        if(searchedNumber){
            return randomIdGenerator(initialValue,endValue)
        }else{
            numbersArray.push(number)
            return number
        }
    }else{
        numbersArray.push(number)
        return number
    }
}

function randomIdGenerator(initialValue, endValue){
    const randomNumber = Math.floor(initialValue + Math.random() * endValue)
    return checkPreviousRandomNumbers(randomNumber,initialValue,endValue)
}

async function fetchQuotesSubjects(){
    const response = await fetch(`https://dummyjson.com/quotes/${randomIdGenerator(1,1453)}`);
    const data = await response.json();
    return data
}
let counter = 0;

body.style.background = `url(https://picsum.photos/id/1/5000/3333.webp)`;
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";

nextQuoteBtn.addEventListener('click',async function(){
    const data = await fetchQuotesSubjects();
    quoteContent.innerText = `${data.quote}`;
    cardAuthor.innerText = `${data.author}`;
    counter ++;
    body.style.background = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${counter}.webp)`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";

})
