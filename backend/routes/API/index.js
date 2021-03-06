const router = require("express").Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const dashboardRouter = require("./dashboard.js");
const postRouter = require("./post.js");


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use("/dashboard", dashboardRouter);
router.use("/post", postRouter);
// const asyncHandler = require("express-async-handler");
// const { setTokenCookie, restoreUser, requireAuth } = require("../../utils/auth");
// const { User } = require("../../db/models");

// router.get(
//   "/set-token-cookie",
//   asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: "GLOBUG",
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// router.get("/restore-user", restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// router.get("/require-auth", requireAuth, (req, res) => {
//   return res.json(req.user);
// });

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
