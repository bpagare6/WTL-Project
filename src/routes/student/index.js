import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.render("student-course");
});

route.get("/addcourse", (req, res) => {
  res.render("student-add-course");
});

route.get("/assignments", (req, res) => {
  res.render("student-assignment");
});

route.get("/single-assignment", (req, res) => {
  res.render("student-individual-assignment");
});

route.get("/code-editor", (req, res) => {
  res.render("student-code-upload");
});

export default route;
