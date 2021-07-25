AOS.init();
const log = console.log;
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const tweet = document.getElementById("tweet");
let len;
let realData;
let q = "";
const getNewQuotes = () => {
  let random = Math.floor(Math.random() * len);
  q = realData[random];
  quote.innerHTML = `${q.text}`;
  q.author == null
    ? (author.innerHTML = "by unknown")
    : (author.innerHTML = `-by ${q.author}`);
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    len = realData.length;
    getNewQuotes();
  } catch (error) {}
};
const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${q.text}`;
  window.open(tweetPost);
};

newQuote.addEventListener("click", getNewQuotes);

tweet.addEventListener("click", tweetNow);

getQuotes();
