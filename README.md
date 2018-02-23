This is an on-going project I seek to continue to build out on my GitHub in the coming months. At this point, my solo project presentation at Prime has occured, and was presented using hardcoded songs in a hardcoded tourament. However, Spotify oAuth2.0 is implemented!

Please check out the /public/assets/wireframe folder for views of the planned future functionality.
1/20/18

Application Overview

Music Tournament is a full-stack web application that allows you to create dynamic music tournaments that populate music tracks in an easy to listen to and score fashion. It provides an interface to curate songs to compete in the tournament. It allows you to listen to pairs of songs in a matchup and provide votes while matchups are “live”, and then tabulates results and advances winners.

Views
See Wireframe Folder In Assets for images
 
Features
Build User Profile and Authentication Using Spotify Password
Establish Database Schemas AND Queries
Build Bracket Generator Logic
Build Bracket Progression Logic Including Votes
Build Playlist Creator API on Site
Build Modals of Two Song Matchups for Voting
Build out Time Advancing option for Cron
Build Record of Top Voted Songs for User Profile
Build Out User Comment Functionality for Tournaments
Figure out authentication for Public vs. Private tournaments and how that could work

Browsers
Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.

Google Chrome Version 63.0.3239.84 (Official Build) (64-bit)



 
Assumptions
I am able to digest and understand the Spotify API options and associated technologies in order to build functionality live on app. Resources currently consulting include:
https://github.com/thelinmichael/spotify-web-api-node
https://developer.spotify.com/web-api/tutorial/

I will be able to commit a significant amount of time over break to do this

The Spotify API functionality will not significantly change in the next 4 weeks

Embedded playlists using the API will be free for anyone to listen to in a similar way that hardcoding the embed code for a playlist currently works


Technologies
Angular
Node
Express
Spotify Web API
Spotify Passport
SQL
Angular Routes
Bootstrap

Stretch Goals
In addition to just allowing users to participate in tournaments and vote, I want to build out a list of the songs they voted highest for to be stored on their profile.
Additional statistics around how certain songs or artists do across many tournaments (like in the far future, being able to see an Artist or Song profile to see how it scored and where it exited, something like that.)
Ensure that the two song playlists that are being generated for a given match are deleted once the match is completed, otherwise whoever created the tournament is going to end up with a whole bunch of two song playlists on their personal Spotify account
Store a Sweet 16 playlist attached to archived tournaments
Pull Artist images/artwork to decorate the bracket.
Cool CSS effects
