var quotes = [
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― 0 Mahatma Gandhi"
  },
  {
    quote: "“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .”",
    author: "― 1 C.S. Lewis"
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― 2 Elbert Hubbard"
  },
  {
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― 3 Oscar Wilde"
  },
  {
    quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― 4 Mahatma Gandhi"
  },
  {
    quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "― 5 Oscar Wilde"
  },
]
var dailyQuote = document.getElementById('quote')
var authorName = document.getElementById('author')
var prevIndex = null



var lastIndex = "";
var random = "";
var display = [];

function generateQuote() {
  if(display.length == quotes.length)
    {display=[]};
    do {
      random = Math.floor(Math.random() * quotes.length);
    }while(random==lastIndex || display.includes(random));
  
    lastIndex = random;
    let displayQuote = quotes[random];
    display.push(random);
    document.getElementById("quote").innerHTML=displayQuote.quote;
    document.getElementById("author").innerHTML=displayQuote.author;
    console.log(random)
}
// function getRandomIndex() {
//     var nextIndex = Math.floor(Math.random() * quotes.length);

//     if (nextIndex === prevIndex) {
//         return getRandomIndex();
//     }
//     prevIndex = nextIndex;
//     return prevIndex;
//   }
// function generateQuote() {
//   var random = getRandomIndex()
//   dailyQuote.innerHTML = quotes[random].quote
//   authorName.innerHTML = quotes[random].author
//   console.log(random)
// }