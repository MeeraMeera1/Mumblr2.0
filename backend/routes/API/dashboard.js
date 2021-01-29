const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/posts",
  asyncHandler(async (req, res) => {
    const postObj = await db.PostContent.findAll({
      include: db.Post,
      order: [["updatedAt", "DESC"]],
    });
    const postTypesObj = await db.PostType.findAll();
    const usersObj = await db.User.findAll();
    const likedPostsObj = await db.Like.findAll();

    const users = usersObj.map((user) => user);

    const postTypes = postTypesObj.map((type) => {
      return type.type;
    });

    const posts = postObj.map((post) => {
      const postType = postTypes.filter((type, idx) => {
        if (idx + 1 === post.Post.postTypeId) {
          return type;
        }
      });

      const associatedUser = users.filter((name, idx) => {
        if (name.id === post.Post.userId) {
          return name;
        }
      });

      const match = likedPostsObj.filter((likedPost) => {
        // return likedPost.userId === post.Post.userId;
        return likedPost.postId === post.id;
      });

      return {
        id: post.id,
        userId: associatedUser[0].id,
        username: associatedUser[0].username,
        likedPost: match,
        postId: post.postId,
        postType: postType,
        title: post.Post.title,
        description: post.description,
        src: post.src,
      };
    });

    return res.json(posts);
  })
);

router.post(
  "/posts/like",
  asyncHandler(async (req, res) => {
    const { postId, userId } = req.body;

    const userLikedPost = await db.Like.findOne({
      where: { userId, postId },
    });

    if (userLikedPost) {
      await userLikedPost.destroy();
    } else {
      await db.Like.create({ postId, userId });
    }
  })
);

router.get(
  "/posts/like",
  asyncHandler(async (req, res) => {
    const likePostObj = await db.Like.findAll({
      include: [db.User],
      order: [["updatedAt", "DESC"]],
    });

    res.json(likePostObj);
  })
);

router.get(
  "/:user/posts",
  asyncHandler(async (req, res) => {})
);

module.exports = router;
