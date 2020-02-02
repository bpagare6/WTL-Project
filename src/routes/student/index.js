import express from "express";
const route = express.Router();

route.get("/code-editor", (req, res) => {
  res.render("student-code-upload");
});

export default route;
