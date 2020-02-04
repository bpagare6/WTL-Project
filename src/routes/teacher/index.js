import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.render("teacher-course");
});

route.get("/addcourse", (req, res) => {
  res.render("teacher-add-course");
});

export default route;
