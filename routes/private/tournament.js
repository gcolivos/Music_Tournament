/**
 * Provides basic route for user view
 *
 * @module routes/private profile
 */


var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var pool = require('../../modules/pool');


router.get('/', function (req, res) {
  console.log('base tournament router.get');

  if (err) {
    console.log(err);
    res.send(400);
  }
  else {
    res.send(200);
  }
});

router.get('/songs', function (req, res) {
  console.log('getting songs from database');
  if (req.isAuthenticated()) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
      if (errorConnectingToDatabase) {
        res.sendStatus(500);
      } else {
        client.query(`WITH previous_results AS (
          SELECT tournament_id, song_id, seed, original_order FROM tournament_song
          JOIN tournaments on tournament_song.tournament_id = tournaments.id)
          SELECT * from songs
          JOIN previous_results on songs.id = previous_results.song_id
          WHERE tournament_id = 1;`, function (errorMakingDatabaseQuery, result) {
            done();
            if (errorMakingDatabaseQuery) {
              res.sendStatus(500);
            } else {
              res.send(result.rows);
            }
          }); // end query
      }
    });
  } else {
    res.sendStatus(401);
  }
}); // end collaborator/search/all get


module.exports = router;
