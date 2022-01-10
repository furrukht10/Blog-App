<h1 align ="center" > Blog Application </h1>
A Full Stack Blog Application where users can sign in with Google to create public or private posts 

- Utilized Node.js, Express.js, and MongoDB to develop a RESTful API and run the Backend
- Utilized Google OAuth and Passport.js for secure login using Google
- Developed the front-end using Handlebars.js and vanilla JS
- Deployed on Heroku

## To Use

### Deployed Version: https://ft-blog-application-v1.herokuapp.com

Login using Google Authentication
Head to the Dashboard and click the + icon to write your first post
Choose to make it public or private
View your post and other users post in the Public Posts section

## Demo

- Log in using Google Authentication
![image](https://user-images.githubusercontent.com/79553858/148823688-9adaf1ea-2d8c-4b3b-92ce-aa02cde47ad1.png)

-Create and edit new public or private posts
![image](https://user-images.githubusercontent.com/79553858/148823783-f862e913-4c2d-4db8-8079-fe69b9361191.png)

-View your posts and other users posts
![image](https://user-images.githubusercontent.com/79553858/148823839-bb7d7112-829c-47f7-bf3c-496334de5d5c.png)


## For Development

Add your mongoDB URI and Google OAuth credentials to the config.env file

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```
