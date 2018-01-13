/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();

var student = require ('./student');

router.use('/student', student);

router.get('/', function (req, res) {
    res.redirect('/#!/students'); // they made it!
});

module.exports = router;
