import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const box = document.querySelector("aside.side-content")
// let fixed = false
// let position = box.getBoundingClientRect()
// console.log(position)

// function getPosition(element) {
//   var xPosition = 0;
//   var yPosition = 0;

//   while(element) {
//       xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
//       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
//       element = element.offsetParent;
//   }

//   return { x: xPosition, y: yPosition };
// }

// window.addEventListener('scroll', ()=>{console.log(getPosition(box))})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
