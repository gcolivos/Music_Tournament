require('dotenv').config();

/**
 * We configure our instance of passport in this file.
 * We must specify:
 * (1) How the user will be serialized (i.e., what data will be made
 * available in a session)
 * (2) How the user will be deserialized (i.e., how do we find the user based
 * on the data available in our session)
 *
 * In addition, we define our authentication strategy in this file.
 *
 * @module auth/passport
 */
// SECRET KEYS
var appKey = process.env.SPOTIFY_API_KEY;
var appSecret = process.env.SPOTIFY_SECRET;
var appCallback = process.env.SPOTIFY_CALLBACK_URL;
 /** ---------- REQUIRE NODE MODULES ---------- **/
var passport = require('passport');
var SpotifyStrategy = require('passport-spotify').Strategy;
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
var config = require('../config/auth.js');

// all db queries moved to a service layer, necessary for proper unit testing
var UserService = require('../services/user');
/** ---------- PASSPORT SESSION SERIALIZATION ---------- **/

// serialize the user onto the session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// deserialize the user from the session and provide user object
passport.deserializeUser(function (id, done) {
  UserService.findUserBySpotifyId(id, function (err, user) {
    if (err) {
      return done(err);
    }

    return done(null, user);
  });
});
/** ---------- PASSPORT STRATEGY DEFINITION ---------- **/
passport.use('spotify', new SpotifyStrategy({
  // identify ourselves to Spotify and request Spotify user data
  clientID: appKey,
  clientSecret: appSecret,
  callbackURL: appCallback,
}, function (token, refreshToken, profile, done) {
  // Google has responded
  console.log("the token is " + token + " and the refreshToken is " + refreshToken);
  console.log('this is everything in the profile:', profile);
  // does this user exist in our database already?
  UserService.findUserBySpotifyId({ spotifyId: profile.id }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) { // user does exist!
        UserService.updateWithToken(token, profile.id, user);
        return done(null, user);
      }

      // //user does not exist in our database and we don't want them to
      // done(err);
      // // user does not exist in our database, let's create one!
      UserService.createSpotifyUser(profile.id, token, profile.displayName,
        profile.emails[0].value, /* we take first email address */
        function (err, user) {
          if (err) {
            return done(err);
          }
      
          return done(null, user);
        });
    });

}));

module.exports = passport;
