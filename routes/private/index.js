/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
var express = require('express');
var router  = express.Router();

var user = require ('./user');
var tournament = require ('./tournament');

router.use('/user', user);
router.use('/tournament', tournament);

router.get('/', function (req, res) {
    res.redirect('/#!/users'); // they made it!
});

module.exports = router;
