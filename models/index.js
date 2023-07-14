const User = require('./User');
const Book = require('./Book');
const Review = require('./Review')

// A user can make many reviews
User.hasMany(Review, {
  foreignKey: "user_id",
});
// A review belongs to a user
Review.belongsTo(User, {
  foreignKey: "user_id",
});


// A book can have many reviews
Book.hasMany(Review, {
  foreignKey: 'book_id',
});
// A review belongs to a book
Review.belongsTo(Book, {
  foreignKey: 'book_id',
});


//user can have may books
User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//

Book.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Book, Review };
