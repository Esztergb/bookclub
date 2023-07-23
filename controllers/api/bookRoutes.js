const router = require('express').Router();
const { Book, UserFavorites } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require('sequelize');
// Fetch books by title
router.get('/', async (req, res) => {
  try {
    const { title } = req.query;

    const books = await Book.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`,
        },
      },
    });

    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create a new book
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

// Delete a book by its ID
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

// Add a book to favorites
router.post('/favorites', withAuth, async (req, res) => {
  try {
    console.log(req.body,req.session.user_id)

    const newFavorite = await UserFavorites.create({
      user_id: req.session.user_id,
      book_id: req.body.book_id,
    });

    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Delete a book from favorites by its ID
// router.delete('/favorites/:id', withAuth, async (req, res) => {
//   try {
//     const favoriteData = await UserFavorites.destroy({
//       where: {
//         user_id: req.session.user_id,
//         book_id: req.params.id,
//       },
//     });

//     if (!favoriteData) {
//       res.status(404).json({ message: 'No favorite book found with this id!' });
//       return;
//     }

//     res.status(200).json(favoriteData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
