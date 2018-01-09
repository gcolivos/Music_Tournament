/** Google Cloud API credentials that allows the application to
  * make calls to a Google API.
  * See {@link https://console.developers.google.com}
  * and replace each value with your own.
  * @todo replace each googleAuth value with your app's client credentials
  * @todo give yourself a unique secrect for your sessions
  * @module config/auth
  */
  var authConfigs = {
    spotifyAuth: {
      clientId: process.env.SPOTIFY_API_KEY,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackUrl: process.env.SPOTIFY_CALLBACK_URL,
    },

    sessionVars: {
      secret: 'hello',
    },
  };

module.exports = authConfigs;