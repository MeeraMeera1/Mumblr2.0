'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: DataTypes.INTEGER,
    followedId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
    Follow.belongsTo(models.User, { foreignKey: 'userId', as: 'userId'});
    Follow.belongsTo(models.User, { foreignKey: 'followedId', as: 'followedId'})

  };
  return Follow;
};