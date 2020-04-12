# WTL-Project

Work on the front-end started ...

### Tech Stack
- HTML5
- CSS3
- JS
- JQuery
- Servlets
- JSP
- PostgreSQL DB

### Requirement
- node v12.14.1
- npm v6.13.4
- `npm install`

### Database Requirement
```bash
$ psql -U postgres

postgres# create database "digital-classroom";
DATABASE CREATED
postgres# \q
```

Tables will be created directly, you can change username and password in modesl/index.js file.

I have tried to make this structure as close to django. You can write the backend functions in controller.js

### Setup
- `npm install` this will install all necessary packages.
- Then setup the database by running **Running seeddata task in npm scripts**.
- Check your database once, it should have created sample data into the database.
- Then run `npm start` to start the server.

### To DO
- [x] Login Module
- [x] Profile Name
- [x] Logout Module
- [ ] Show Courses
- [ ] Show Assignments
- [ ] Add Course
- [ ] Add Assignment
- [ ] Upload Assignment

### Future work
- [ ] Add evaluation
- [ ] Add live execution