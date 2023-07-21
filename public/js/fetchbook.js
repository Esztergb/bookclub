const btnSearchBook = document.querySelector('#search-book');
const main = document.querySelector('#main');
const input = document.querySelector('#input');
const bookApiKey = 'AIzaSyDJ5jgrBs4MYEZUDJrKd6tz9W-2cnpD3y0';

// fetch books by title
const fetchBooksByTitle = function(e) {
  main.innerHTML = '';
  e.preventDefault();
  const userInput = input.value;
  const bookapiURL = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${bookApiKey}`;

  fetch(bookapiURL)
    .then(response => response.json())
    .then(result => {
      createBookEl(result.items);
    });

  input.value = '';
};

btnSearchBook.addEventListener('click', fetchBooksByTitle);

const createBookEl = function(books) {
  books.forEach(book => {
    let title = book.volumeInfo.title;
    let imgThum = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : '';

    let bookEl = document.createElement('div');
    bookEl.classList.add('bookEl');

    bookEl.innerHTML = `
      <a href="#">
        <img src="${imgThum}" alt="${title}">
      </a>
      <button class="btn btn-primary favorite-btn" data-book-id="${book.id}">Add to favorites</button>
    `;

    bookEl.addEventListener('click', event => {
      event.preventDefault();
      // Display details for this book
      displayBookDetails(book);
    });

    main.appendChild(bookEl);
  });

  // Add event listeners to the "Add to favorites" buttons
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', handleFavoriteClick);
  });
};

function displayBookDetails(book) {
  const modal = document.getElementById('bookModal');
  const modalContent = modal.querySelector('.modal-content');

  let title = book.volumeInfo.title;
  let author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown';
  let description = book.volumeInfo.description || 'No description available';

  modalContent.innerHTML = `
    <h3>${title}</h3>
    <h5>Author: ${author}</h5>
    <p>${description}</p>
    <button class="btn btn-primary favorite-btn" data-book-id="${book.id}">Add to my books!</button>
  `;

  modal.classList.add('is-active');
}

document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('bookModal').classList.remove('is-active');
});

// Event listeners
btnSearchBook.addEventListener('click', fetchBooksByTitle);

document.addEventListener('click', event => {
  if (event.target.matches('.favorite-btn')) {
    handleFavoriteClick(event);
  }
});

async function handleFavoriteClick(event) {
  const bookId = event.target.getAttribute('data-book-id');
  await addToFavorites(bookId, event.target); // passing the button as well for UI feedback
}

async function addToFavorites(bookId, btn) {
  try {
    const response = await fetch('/api/books/favorites', {
      method: 'POST',
      body: JSON.stringify({ book_id: bookId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Book successfully added to favorites!');
      btn.textContent = 'Added to your books!';
      btn.disabled = true;
    } else {
      console.error('Error adding book to favorites.');
      alert('Failed to add book to favorites. Try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
}