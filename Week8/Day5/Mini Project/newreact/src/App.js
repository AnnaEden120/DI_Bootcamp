import React, {useState, useEffect} from "react";
import "./style.css";

const App = ()=>{
  const [quotes, setQuotes] =useState('');
  let colors =

  const getQuote =()=>{
    fetch("https://type.fit/api/quotes")
    .then(res=>res.json())
    .then(data=>{
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  }

  useEffect(()=>{
    getQuote();
  }, []);

return (
  <div className="App">
  <div className="quote">
    <p>{quotes.text}</p>
    <p> - {quotes.author}</p>
    <div className="btnContainer">
      <button onClick={getQuote} className="btn">New Quote</button>
      </div>
    </div>
    </div>
    
);
};

export default App;