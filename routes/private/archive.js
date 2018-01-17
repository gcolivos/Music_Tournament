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


router.get('/',function(req,res){
  console.log('base tournament router.get');

    if(err){
      console.log(err);
      res.send(400);
    }
    else{
      res.send(200);
    }
  });


module.exports = router;
