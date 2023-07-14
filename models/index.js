const User = require('./User');
const Book = require('./Book');
const Review = require('./Review')

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

Book.hasMany(Review, {
    foreignKey: 'book_id'
});

module.exports = { User, Book, Review };
