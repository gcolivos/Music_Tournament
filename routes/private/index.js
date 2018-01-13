/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();

var student = require ('./student');

var isStudent = require('../../utils/checkStudentStatus');

router.use('/student', isStudent, student);

router.get('/', function (req, res) {
    res.redirect('/#!/students'); // they made it!
});

module.exports = router;
