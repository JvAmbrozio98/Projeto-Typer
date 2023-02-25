const RAMDOM_QUOTE_API = "http://api.quotable.io/random";
const QuoteText = document.getElementById('quote-text');
const QuoteInput = document.getElementById('quote-input');

QuoteInput.addEventListener('input',() => {
    const arrayQuote = QuoteText.querySelectorAll('span');
    const arrayValue = QuoteInput.value.split('');
    
    let correct = true;
    arrayQuote.forEach((letterSpan , index) => {
        const character = arrayValue[index]
        if (character === null) {
            letterSpan.classList.remove('correct')
            letterSpan.classList.remove('incorrect')
            correct = false;
        }
        else if(character === letterSpan.innerText) {
            letterSpan.classList.add('correct')
            letterSpan.classList.remove('incorrect')
        } else {
            letterSpan.classList.add('correct')
            letterSpan.classList.remove('incorrect')
            correct = false 
        }
    })
    if (correct)  getRandomQuote () 
} )



function getRandomQuote () {
    return fetch(RAMDOM_QUOTE_API)
        .then(responde => responde.json())
        .then(data => data.content)
}

async function getNextQuote () {
    const quote = await getRandomQuote ();
    QuoteText.innerHTML = '';
    quote.split('').forEach(letter => {
        const letterSpan = document.createElement('span');
        letterSpan.innerText = letter ;
       QuoteText.appendChild(letterSpan);
    })
    QuoteInput.value = null;
}
getNextQuote ();
