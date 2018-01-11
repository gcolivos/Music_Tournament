Music Tournament
Guillermo C Olivos
December 17, 2017 | Version 1
Document Objectives
The purpose of this document is to provide detailed documentation about the Music Tournament application I will be building for my Prime Solo Project. It will include such details as:
 
All Features described, how the app works
Technology stack used (Frameworks, Libraries), including any 3rd party APIs/web services
Milestones and rough schedule
Assumptions made during the scoping process
Application Overview
Music Tournament is a full-stack web application that allows you to create dynamic music tournaments that populate music tracks in an easy to listen to and score fashion. It provides an interface to curate songs to compete in the tournament. It allows you to listen to pairs of songs in a matchup and provide votes while matchups are “live”, and then tabulates results and advances winners.

Views















On the left is a search bar to look up songs. Clicking the arrow adds the song to the playlist on the right, which populates as you fill it out. The playlist gets created in the Spotify profile of whomever creates the tournament, so if you decide on some songs but not all of them and want to come back to it later, that could be an option.




The days/round thing is a stretch goal, for MVP I’m going to set it up so admin’s can advance tournament rounds.





Above is a modal window that pops up when you go to score a matchup

Once a song advances, you can click on where it used to be in the bracket to reveal this page, which will be mapped to a ‘/:id’ that maps to the matchup id’s from my schema





Example of Archived Tournament:

Project Features and Schedule
Features are completed, working features from the above listing. Think carefully about the order you will need to build things and when you expect to be done with them. The purpose of this section is to consider the overall timeline and how much work really needs to get done. The Due Date is your best guess and may change. (There should be many more than 3 features.)
 
Feature
Estimated Due Date
Stage (MVP, Base, Stretch
Build User Profile and Authentication Using Spotify Password
12/22/17
MVP
Establish Database Schemas AND Queries
12/26/17
MVP
Build Bracket Generator Logic
12/29/17
MVP
Build Bracket Progression Logic Including Votes
1/3/17
MVP
 Build Playlist Creator API on Site
1/4/17
Base
Build Modals of Two Song Matchups for Voting
1/4/17
Base
Build out Time Advancing option for Cron
1/10/17
Base
Build Record of Top Voted Songs for User Profile
1/7/17
Stretch
Build Out User Comment Functionality for Tournaments
1/9/17
Stretch
Figure out authentication for Public vs. Private tournaments and how that could work
1/10/17
Stretch
Browsers
Application will fully support browsers listed below. All browsers or versions not listed below are considered out of scope.
 
Browser Name
Version
 Google Chrome
Version 63.0.3239.84 (Official Build) (64-bit)



 
Assumptions
I am able to digest and understand the Spotify API options and associated technologies in order to build functionality live on app. Resources currently consulting include:
https://github.com/thelinmichael/spotify-web-api-node
https://developer.spotify.com/web-api/tutorial/
I will be able to commit a significant amount of time over break to do this
The Spotify API functionality will not significantly change in the next 4 weeks
Embedded playlists using the API will be free for anyone to listen to in a similar way that hardcoding the embed code for a playlist currently works
Entity Relationship Diagrams


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
