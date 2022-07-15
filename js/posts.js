'use strict';
console.log('main.js');

const createFormEl = document.forms[0];
const titleEl = document.getElementById('title');
const imageEl = document.getElementById('image');
const dateEl = document.getElementById('date');
const authorEl = document.getElementById('author');
const bodyEl = document.getElementById('body');
const postsContainerEl = document.querySelector('.posts-container');

createFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('Js is in control');
  const newPostObj = {
    title: titleEl.value,
    image: imageEl.value,
    date: dateEl.value,
    author: authorEl.querySelector(':checked').textContent,
    body: bodyEl.value,
  };
  console.log('newPostObj ===', newPostObj);
  makePostToHtml(newPostObj, postsContainerEl);
  createFormEl.reset();
});

function makePostToHtml(post, dest) {
  const artEl = document.createElement('div');
  artEl.className = 'post card';
  artEl.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h3 class="post__title">${post.title}</h3>
    <h4 class="post__author">Autorius: ${post.author}</h4>
    <p class="post__date">${post.date}</p>
    <p class="post__text">${post.body}</p>
  `;
  dest.append(artEl);
}

const postsArr = [
  {
    title: 'Html',
    image: 'https://picsum.photos/id/1016/1000/800',
    date: '2022-05-18',
    author: 'Severijus ',
    body: 'Html is the structure',
  },
  {
    title: 'Css',
    image: 'https://picsum.photos/id/1013/1000/800',
    date: '2021-05-18',
    author: 'James bond ',
    body: 'Css is the design',
  },
];

makePostToHtml(postsArr[0], postsContainerEl);
makePostToHtml(postsArr[1], postsContainerEl);

// loclasstorage
