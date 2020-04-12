import express from "express";
import users from "../../controllers/users.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/login", (req, res) => {
  res.render("login");
});

route.post("/auth", (req, res) => {
  var sess;
  sess = req.session;
  users.authenticate_user(req.body).then(result => {
    if (result) {
      sess.user = req.body.username;
      if (sess.user) {
        res.locals.user = req.session.user;
        res.render("student-course");
      }
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });
});

route.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.redirect('/login');
  } else {
    res.redirect('/login');
  }
});

export default route;
