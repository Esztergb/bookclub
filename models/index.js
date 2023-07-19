const User = require('./User');
const Book = require('./Books');
const UserFavorites = require('./UserFavorites');
// const Review = require('./Review')

// A user can make many reviews
// User.hasMany(Review, {
//   foreignKey: "user_id",
// });
// // A review belongs to a user
// Review.belongsTo(User, {
//   foreignKey: "user_id",
// });


// A book can have many reviews
// Book.hasMany(Review, {
//   foreignKey: 'book_id',
// });
// // A review belongs to a book
// Review.belongsTo(Book, {
//   foreignKey: 'book_id',
// });


// Many-to-Many relationship for favorites
User.belongsToMany(Book, {
  through: UserFavorites,
  as: 'favoritedBooks',
  foreignKey: 'user_id',
});

Book.belongsToMany(User, {
  through: UserFavorites,
  as: 'favoritedByUsers',
  foreignKey: 'book_id',
});

module.exports = { User, Book, UserFavorites };
// module.exports = Review;