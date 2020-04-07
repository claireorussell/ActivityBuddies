# MOVE

##Final Group Project

Have fun. Cement the stack. Master full stack development. One week.

The focus of this app is to provide a way for people to have new experiences and make new friends via outdoor Wellington activities. Our hope is that we have a place for people looking to expand both their friend group and adventurous horizons.



## The Tech

We are going to need the following:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [React-Router](#)

We will create database migrations through knex to create a database. We will use seed files to insert test data into our database.

We will not be making this website responsive to mobile and other devices initially.

## User Stories

### MVP
As a user I should be able to...
* navigate through the pages of the website without issue.
* select my sport/outdoor activity of choice.
* see a list of tracks/locations specific to skill level.
* see a list of meetup posts.
* create a meetup with a skill-level and location, as well as some other junk.
* say if I am going to attend a meetup.


### Stretch
* ...register and login to the website.
* ...and only be able to make new postings if I am a registered user.
* ...I should be able to see anyone who is going to attend a meetup I have created.
* ...only be able to respond to a meetup if I am logged in.
* ...I should have a user page and profile and shows my meetups and a pretty photo of me.
* ...Create a new sport/activity that specifically has to be outside.
* ... Set expiry date on post which would delete it.


## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | home | displays a selection of activites via icons that allows you to search through for the one you want. It also contains a small blurb about the website. |
  | location | this view shows a map of wellington alongside a list of locations relevant to your chosen activity. |
  | meetups | this view shows a list of the meetup postings alongside a widget or similar map to show where you go and who is doing stuff there. Also lets us make a new thing by changing out the meetupList for a meetupAdd form. | 

  * in the meetups we have the post list, the widget, and the 'add a post' form.


## Reducers (Client Side)
  | name | purpose |
  | --- | --- |
  | auth(*stretch) | Store information regarding user logins, auth status and auth errors | 
  | skillLevel (this is local state, not reducer)| Changes the CSS of the meetups posting |
  | currentActivity | Hold current activity information |
  | currentLocation | Hold current location information |
  | posts | posts and changes posts |
  
  
## Actions (Client Side)
  | type | data | purpose |
  | --- | --- | --- |
  | GET_ACTIVITY | activity | For accessing the chosen activity (inside activity data includes difficulty, locations and meetup posts)| 
  | GET_ACTIVITIES | activity | For accessing all activities to display on the homepage |
  | GET_LOCATION |  | For displaying the currentlocation |
  | SET_SKILL_LEVEL | posts | For accessing and displaying posts based on skill level   |
  | GET_POSTS | posts | For accessing the posts that having the same location id |
  | ADD_POST | posts | To Make a post and add it to posts |
  | SET_RSVP | posts | Changes the display of post referring to the number of people going |


## API (Client - Server)
| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/v1/activities | No | Get activities | Array of activity objects |
| Get | /api/v1/activities/:id | No | Get chosen activities corresponding locations | object |
| Get | /api/v1/posts/:id | No | get posts for a certain location using location id | object |
| POST | /api/v1/posts | Yes (if we do it) | post a post to the database| null |
| POST | /api/v1/posts/rsvp | Yes (if we do it) | set rsvp for a post | null |


## DB (Server Side) -
  There should be three tables for MVP. You may want/need to add additional columns or tables.

### Activities
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each activity |
  | name | String | Name of the activity |
  | Symbol | String | The image Source for the symbol representing the activity |
  | colors | string | A way to define color in an activity i.e buttons|
  | photo | string | backround image if it looks not shit |



### Locations
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each location |
  | name | String | Name of each location |
  | activity_id | integer | foreign key of activities |

### Posts
 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 | id | Integer | Unique identifier for each post |
 | user_name | string | Used for login |
 | notes | string | content of the post |
 | date | integer | displayed for date of post |
 | time | string | displayed for time of post (will be called on expiry) |
 | tracks | string | post tracks |
 | skill | string | post skill level of post |
 | location_id | integer | Foreign key for locations |
 ---
