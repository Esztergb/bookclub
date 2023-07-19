const btnSearch = document.querySelector('#search-book');
const bookApiKey = 'AIzaSyDJ5jgrBs4MYEZUDJrKd6tz9W-2cnpD3y0';
const btnSearchBook = document.querySelector('#search-book');
const main = document.querySelector('#main');
const IMGPATH = "http://books.google.com/books/content?";

// fetch books by title
const fetchBooksByTitle = function (e) {
    e.preventDefault();
    const bookTitle = document.querySelector('#input');
    const userInput = bookTitle.value;
    const bookapiURL = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${bookApiKey}`;

    fetch(bookapiURL)
        .then(response => response.json())
        .then(result => {
            console.log(result.items)

            createBookEl(result.items);
        })
};

const createBookEl = function (books) {
    main.innerHTML = '';

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
    const genreURL = `https://www.googleapis.com/books/v1/volumes?q=genre:${genre}`;

    fetch(genreURL)
        .then(response => response.json())
        .then(result => {
            console.log(result.items)

            createBookEl(result.items);
        })


};


fetchByGenre('fiction');



// Event listeners
btnSearchBook.addEventListener('click', fetchBooksByTitle);
