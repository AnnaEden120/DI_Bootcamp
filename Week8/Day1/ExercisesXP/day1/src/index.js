import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';

const myelement = React.createElement('h1', {}, 'I do not use JSX!');
const myelement2 = <h1>Hello World!</h1>;
const myelemen3 = <h1>React is {5 + 5} times better with JSX</h1>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <myelement/>
  <myelement2/>
  <myelemen3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
