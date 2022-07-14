'use strict';
console.log('main.js');

const createFormEl = document.forms[0];
const titleEl = document.getElementById('title');
const imageEl = document.getElementById('image');
const dateEl = document.getElementById('date');
const authorEl = document.getElementById('author');
const bodyEl = document.getElementById('body');

createFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('Js is in control');
  const newPostObj = {
    title: titleEl.value,
    image: imageEl.value,
    date: dateEl.value,
    author: authorEl.value,
    body: bodyEl.value,
  };
  console.log('newPostObj ===', newPostObj);
});
