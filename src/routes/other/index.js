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
  users.authenticate_user(req.body).then(result => {
    if (result) {
      res.send("<h1>User Validated</h1>");
    } else {
      res.send("<h1>Error while validation</h1>");
    }
  });
});

export default route;
