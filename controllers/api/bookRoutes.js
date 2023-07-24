const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios');
require('dotenv').config();

router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/searchBooks/:userInput', async (req, res) => {

  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.userInput}&key=${process.env.API_KEY}`);
  res.status(200).json(response.data);
});

router.get('/getGenre/:genre', async (req, res) => {
  // const genre = 'thriller'
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=genre:${req.params.genre}`);
  res.status(200).json(response.data);
});

module.exports = router;
