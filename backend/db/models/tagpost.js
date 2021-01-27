'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagPost = sequelize.define('TagPost', {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TagPost.associate = function(models) {
    // associations can be defined here
    TagPost.belongsTo(models.Post, { foreignKey: 'postId' });
    TagPost.belongsTo(models.Tag, { foreignKey: 'tagId' });
  };
  return TagPost;
};