const quoteSubject = document.querySelector('#quoteSubject')

async function fetchQuotesSubjects(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data)
    return data
}

fetchQuotesSubjects();