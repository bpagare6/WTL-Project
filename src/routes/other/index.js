import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/login", (req, res) => {
  res.render("login");
});

export default route;
