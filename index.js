// Write your code here!
const postList = document.getElementById('post-list');
const pageHeader = document.querySelector('header');

const tabs = ['For You', 'Trending', 'Explore', 'Friends', 'Local'];
const randomTab = tabs[Math.floor(Math.random() * tabs.length)];

function setActiveTab(tabName) {
  if (!pageHeader) return;
  pageHeader.textContent = `Flatbook - ${tabName}`;
}

function displayPosts(posts) {
  if (!postList) return;

  posts.forEach(post => {
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

setActiveTab(randomTab);
fetchAndDisplayPosts();
