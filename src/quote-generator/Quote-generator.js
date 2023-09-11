import React, { useState, useEffect } from "react";
import "./quote.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuotes();
    setLoading(false);
  }, []);

  let apiQuote;

  function getSingleQUote() {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * apiQuote.length);
    const randomQuote = apiQuote[randomIndex];
    setQuote(randomQuote);
    setLoading(false);
  }

  async function getQuotes() {
    setLoading(true);

    const apiUrl =
      "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
      const response = await fetch(apiUrl);
      apiQuote = await response.json();
      getSingleQUote();
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  }

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(twitterUrl, "_blank");
  }

  return (
    // <div className="main-container">
    //   <div className="quote-container">
    //     <div className="quote-text">
    //       <i className="fas fa-quote-left"></i>
    //       <span className={quote?.text?.length > 120 ? "long-quote" : ""}>
    //         {quote.text}
    //       </span>
    //     </div>
    //     <div className="quote-author">
    //       <span> {quote.author} </span>
    //     </div>
    //     <div className="button-conatiner">
    //       <button
    //         className="twitter-button"
    //         title="Tweet this"
    //         onClick={tweetQuote}
    //       >
    //         <i className="fab fa-twitter"></i>
    //       </button>
    //       <button onClick={getQuotes}>New Quote</button>
    //     </div>
    //     {loading && <div className="loader"></div>}
    //   </div>
    // </div>
    // ^ MY other check
    <div className="main-container">
      /
      <div className="quote-container">
        <QuoteText quote={quote} />
        <QuoteAUthor quote={quote} />
        <QuoteBtns onClickTwi={tweetQuote} onCLickQuote={getQuotes} />
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default QuoteGenerator;

function QuoteText({ quote }) {
  return (
    <div className="quote-text">
      <i className="fas fa-quote-left"></i>
      <span className={quote?.text?.length > 120 ? "long-quote" : ""}>
        {quote.text}
      </span>
    </div>
  );
}
function QuoteAUthor({ quote }) {
  return (
    <div className="quote-author">
      <span> {quote.author} </span>
    </div>
  );
}
function QuoteBtns({ onClickTwi, onCLickQuote }) {
  return (
    <div className="button-conatiner">
      <button
        className="twitter-button"
        title="Tweet this"
        onClick={onClickTwi}
      >
        <i className="fab fa-twitter"></i>
      </button>
      <button onClick={onCLickQuote}>New Quote</button>
    </div>
  );
}
function LoadingSpinner() {
  return <div className="loader"></div>;
}

// export default QuoteGenerator;
