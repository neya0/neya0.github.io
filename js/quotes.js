const quotes = [
    {quote: "A fair request should be followed by the deed in silence.",
     author: "Dante Alighieri"},
    {quote: "I never did a day's work in my life. It was all fun.",
     author: "Thomas A.Edison"},
    {quote: "If all the year were playing holidays; To sport would be as tedious as to work.",
     author: "William Shakespeare"},
    {quote: "Artists who seek perfection in everything are those who cannot attain it in anything.",
     author: "Eugene Delacroix"},
    {quote: "If little else, the brain is an educational toy.",
     author: "Tom Robbins"},
    {quote: "Waste no fresh tears over old griefs.",
     author: "Euripides"},
    {quote: "Glory is fleeting, but obscurity is forever.",
     author: "Napoleon Bonaparte"},
    {quote: "This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities.",
     author: "Bertrand Russell"},
    {quote: "The moment of victory is much too short to live for that and nothing else.",
     author: "Martina Navratilova"},
    {quote: "A man cannot be too careful in the choice of his enemies.",
     author: "Oscar Wilde"},
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;