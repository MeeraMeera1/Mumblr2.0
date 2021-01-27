'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    urlContent: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: "userId" });

    Post.hasMany(models.Like, { foreignKey: "postId" });
    Post.hasMany(models.Comment, { foreignKey: "postId" });
    Post.hasMany(models.Reblog, { foreignKey: "postId" });
    Post.hasMany(models.TagPost, { foreignKey: "postId"});
  };
  return Post;
};