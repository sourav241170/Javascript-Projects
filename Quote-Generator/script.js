const apiUrl= "https://dummyjson.com/quotes/random";
const quote= document.getElementById("quote");
const author= document.getElementById("author");
const newQuote= document.getElementById("new-quote");
const share= document.getElementById("share");

async function getQuote(url){
    const response= await fetch(url);
    var data= await response.json();
    // console.log(data);
    quote.innerHTML= data.quote;
    author.innerHTML= data.author;
}
getQuote(apiUrl);

newQuote.addEventListener("click", ()=>{
    getQuote(apiUrl);
})
