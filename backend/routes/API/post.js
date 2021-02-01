const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");
const { renderPost } = require("../../utils/render");
const { requireAuth } = require("../../utils/auth");
// const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");


const router = express.Router();

router.post(
  "/create/:postType",
  requireAuth,
  asyncHandler(async ({ user: { id: userId }, body }, res) => {
    const { title, body: postBody, urlContent, type, tags } = body;

      const newPost =
        await db.Post.create({
          userId,
          title,
          body: postBody,
          urlContent,
          type,
          tags,
        })

      renderPost(res.json({ newPost }));
    })
);


module.exports = router;
