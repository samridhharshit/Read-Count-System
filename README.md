# Introduction

Read count system consists of a set of stories that are accessible by multiple users. Its shows count of all the viewers that have visited a story alongside the live viewers that are currently reading the story. [visit the website](https://livereadcount.herokuapp.com/)

It is a simple website consisting of namely 4 pages
 - Signup Page - It takes up user's first name, last name, email and password 
 - Login page - It takes up user's email and password
 - A page showing the collection of all stories - consists of all the stories
 - A page to display a particular story - consists of the story title, story description, total viewers count and live viewers visiting count
 
 # Backend Architecture
 
 ![route structure pratilipi](https://user-images.githubusercontent.com/39849261/93043418-579e0d00-f66f-11ea-973c-e18db095968a.png)

The Project consist of multiple sub-directories, and a main server.js file that is  used to trigger the application.

### Directories Sub division

**database** - consists of a model directory, and a config file. Config file contains the configuration for connecting to the mysql database and Sequelize ORM.
 
 Further the model directory is sub divided into a container directory, and an index.js file. The index.js file creates a connection with the db using sequelize by creating different models that are introduced in the container directory.
 
 There are 3 models in totality namely history, story and user. 
  - User model contains the user data structure
  
  ![user info](https://user-images.githubusercontent.com/39849261/93043959-ff680a80-f670-11ea-82b8-0bdceb69f792.png)
 
  - story model contains the story details structure
  
  ![story structure](https://user-images.githubusercontent.com/39849261/93044061-47872d00-f671-11ea-81df-4a32f93cf745.png)
  
  - history model contains the userId and storyId as foreign keys to keep track to visitors to a story
  
  ![history model](https://user-images.githubusercontent.com/39849261/93044149-97fe8a80-f671-11ea-9649-9081e241bcee.png)


**routes** - this consists of an api directory, and an index.js file. It redirects to the /api/index file if the request route has `/api` in it in order to handle further api requests.

Further in api directory, the index file consists of 2 redirection, one for `/user` and the other for `/story`. The user route consists of all the that are related to any sort of user activity. Similarly, the story route consists of all the routes that are related to story accessing.

The `userRoutes` file consists of 2 routes. `/signup` route is used for signing up the user. The password fetched from the user is encrypted using and then saved into the database. The `/login` route is used for user authenticity.   

The `storyRoutes` file consists of 2 routes, `/getStory/:userId/:storyId` route for fetching a single story and populating the history table with the user id corresponding to the story id,
the other one being `/collection` route to return an array of collection of all the stories  

Now, the controller directory consists of all the logic that are used up in other routes.
 - addUser -> It first checks if the route has received any data or not. if not then it sets `success` to false and responds with a message `Please provide valid data or No Data provided`. Else, a new user is created using try-catch. If User gets created then an object is returned with `success` set to `true` and `data` attribute consisting of the user data else an object is returned with `success` is set to `false` and a message with the error message.
 
 - encryptDecryptPassword -> contains two methods, on for hashing the password and the other for comparing the hashed password with user input.
 
 - getUserCountsForStory -> Has a single method that fetches user count for a single story. if the query is successful then, an object is returned with the parameter `success` set to true and the `data` having the counts of past visitors. If query throws an error, then, the `success` route is set to `false` and the error is thrown out.
 
 - showStory -> It first checks for valid arguments. If present, then, first the history table gets populated with the userId and story id provided and next the `getUserCountsForStory` gets called to fetch the visitors count for the particular story. And then, the story is fetch using the story id from the story table returning the story details and the visitors count for the story.
 
 - showStoryCollection -> returns the collection of all the stories.
 
 - verifyUser -> First check if credentials is being provided. if yes, then a query is made to fetch the user from the database with the email provided. If email is incorrect then `success` is set to `false` and a message `Invalid Email Id, Please enter the correct email...` is returned. If not, then the password gets compared with the hashed password that is present in the database corresponding to the email id. Again if password is incorrect , then `succes` is set to false and a message `Incorrect password, Please enter the correct password...` is returned. Else if everything goes right, then,  `success` is set to `true` and the user object gets returned. 
# Steps for Execution
1. For https, run `git clone https://github.com/samridhharshit/Read-Count-System.git` and for ssh run `git clone git@github.com:samridhharshit/Read-Count-System.git`
2. cd into the project directory and run `npm install`
3. again cd into the client directory and run `npm install`
4. move out to the root directory and then  run `npm run dev` to fire up the project.

### THANK YOU