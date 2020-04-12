/* Create a Web Server */
import express from "express";
import path from "path";
import other_routes from "./routes/other";
import student_routes from "./routes/student";
import teacher_routes from "./routes/teacher";
const app = express();
const session = require('express-session');

app.set("view engine", "ejs");
app.use(session({secret: 'itsverysecret', saveUninitialized: true, resave: true}));

app.use("/css", express.static(path.join("public", "css")));
app.use("/images", express.static(path.join("public", "images")));
app.use("/plugins", express.static(path.join("public", "plu")));
app.use("/teacher/css", express.static(path.join("public", "css")));
app.use("/teacher/images", express.static(path.join("public", "images")));
app.use("/teacher/plugins", express.static(path.join("public", "plugins")));
app.use("/student/css", express.static(path.join("public", "css")));
app.use("/student/images", express.static(path.join("public", "images")));
app.use("/student/plugins", express.static(path.join("public", "plugins")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", other_routes);
app.use("/student", student_routes);
app.use("/teacher", teacher_routes);

export default app;
