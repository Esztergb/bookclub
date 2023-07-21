const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserFavorites extends Model {}

UserFavorites.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      primaryKey: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
      },
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userfavorites',
  }
);

module.exports = UserFavorites;
