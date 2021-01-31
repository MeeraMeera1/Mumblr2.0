const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  "/posts",
  asyncHandler(async (req, res) => {
     const posts = await db.Post.findAll({
      order: [['updatedAt', 'DESC']],
      include: [db.User]
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
