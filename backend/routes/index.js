const express = require('express');
const apiRouter = require('./API')

const router = express.Router();
router.use('/api', apiRouter);
//test route
router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

module.exports = router;
