'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reblog = sequelize.define('Reblog', {
    body: DataTypes.TEXT,
    postId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Reblog.associate = function(models) {
    // associations can be defined here
    Reblog.belongsTo(models.Post, { foreignKey: 'postId'});
  };
  return Reblog;
};