/**
 * A service layer that makes all of our User database queries.
 *
 * @module services/user
 *
 * @function findUserBySpotifyId finds a User by their unique Spotify id
 * @function findUserBySpotifyId finds a User by their Spotify id
 * @function create a User that will be authenticated by Google
 */
var pool = require('../modules/pool');

var UserService = {
  findUserBySpotifyId: function (id, callback) {
    console.log('this is the id', id)
    if (id !== id.spotify_id){
      var id = id.spotify_id
      console.log('this is the new id after pulling it out of the object,' + id);  
    }
    // User.findById(id, function (err, user) {
    pool.connect(function (err, connection, done) {
      console.log('in findById pool connect');
      if (err) {
        console.log(err);
        return callback(err, null);

      } else {
        connection.query("SELECT * FROM users WHERE spotify_id=$1", [id], function (err, user) {
          done();
          if (err) {
            console.log(err);
            return callback(err, null);
          }
          else {
            console.log('there were no errors!!');
            return callback(null, user.rows[0]);
          }
        });
      }
    });

    // if (err) {
    //   return callback(err, null);
    // }
    //
    // return callback(null, user);
    // });
  },

  findAndDeserializeUser: function (id, callback) {
    pool.connect(function (err, connection, done) {
      if (err) {
        console.log('there was an error in finding the person', err);
        return callback(err, null);
      }
      else {
        console.log('in findUserBySpotifyId pool connect with no errors');
        connection.query("SELECT * FROM users WHERE spotify_id=$1", [id], function (error, user) {
          done();
          if (error) {
            console.log(error);
            return callback(error, null);
          }
          else {
            console.log('this is the user found to deserialize', user.rows[0]);
            return callback(null, user.rows[0]);
          }
        });
      }
    });

    // User.findOne({ googleId: id }, function (err, user) {
    //
    //   if (err) {
    //     return callback(err, null);
    //   }
    //
    //   return callback(null, user);
    // });
  },

  createSpotifyUser: function (id, token, name, email, callback) {
    // var user = new User();
    // console.log('this is what the user looks like at first',user);
    // user.googleId = id;
    // console.log('this is the user with just the googleId',user);
    // user.googleToken = token;
    // console.log('this is what the user looks like with the googleToken',user);
    // user.googleName = name;
    // console.log('the user has a name now',user);
    // user.googleEmail = email;
    // console.log('this is the final user',user);
    // user.status = true;

    pool.connect(function (err, connection, done) {
      console.log('in first pool.connect');
      connection.query("INSERT INTO users (spotify_id, name, token, status, email) VALUES ($1,$2,$3,$4,$5)", [id, name, token, true, email], function (err, response) {
        done();
        console.log('in first query');
        if (err) {
          console.log(err);
          return callback(err, null);
        }
        else {
          connection.query("SELECT * FROM users WHERE spotify_id=$1", [id], function (err, users) {
            console.log('In second query');
            done();
            if (err) {
              console.log(err);
              return callback(err, null);

            }
            else {
              console.log(users);
              return callback(null, users.rows);
            }
          });
        }
      });
    });

    // user.save(function (err) {
    //   if (err) {
    //     return callback(err, null);
    //   }
    //
    //   return callback(null, user);
    // });
  },

  updateWithToken: function (token, spotify_id, user) {
    pool.connect(function (err, connection, done) {
      if (err) {
        console.log(err);``
      }
      else {
        connection.query('UPDATE users SET token=$1 WHERE spotify_id=$2 RETURNING *', [token, spotify_id], function (err, result) {
          done();
          if (err) {
            console.log(err);
          }
          else {
            console.log('we did it!!!!!!!!!!!!!!');
          }
        });
      }
    });
  }
};

module.exports = UserService;
