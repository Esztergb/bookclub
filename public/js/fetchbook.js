const btnSearch = document.querySelector('#search-book');
const btnSearchBook = document.querySelector('#search-book');
const main = document.querySelector('#main');
const IMGPATH = "http://books.google.com/books/content?";
const input = document.querySelector('#input');

// fetch books by title
const fetchBooksByTitle = function (e) {
  main.innerHTML = "";
  e.preventDefault();
  const bookTitle = document.querySelector("#input");
  const userInput = bookTitle.value;

  fetch(`/api/books/searchBooks/${userInput}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.items);

      createBookEl(result.items);
    });
  input.value = "";
};

const createBookEl = function (books) {

    books.forEach(book => {
        let title = book.volumeInfo.title;
        let imgThum = '';
        console.log(book.volumeInfo.imageLinks);

        if (book.volumeInfo.imageLinks) {
            imgThum = book.volumeInfo.imageLinks.smallThumbnail;
        }

        let bookEl = document.createElement('div');
        bookEl.classList.add('bookEl');

        bookEl.innerHTML = `
        <img src="${imgThum}" alt="${title}">
        `
        main.appendChild(bookEl);
    });

    console.log(books);
}

// fetch books by genre
const fetchByGenre = function (genre) {
  // const genreURL = `https://www.googleapis.com/books/v1/volumes?q=genre:${genre}`;

    fetch(`/api/books/getGenre/${genre}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.items)

            createBookEl(result.items);
        })
};


//fetchByGenre('fiction');
fetchByGenre('thriller');
fetchByGenre('history');
fetchByGenre('romance');




// Event listeners
btnSearchBook.addEventListener('click', fetchBooksByTitle);
