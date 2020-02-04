/* Main Database Models file */
import Sequelize from "sequelize";
import config from "../config";

// New Database Connection
const sequelize = new Sequelize(
  config.database_name,
  config.database_username,
  config.database_password,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

// Creating new models
const models = {
  teachers: sequelize.import("./teachers"),
  students: sequelize.import("./students"),
  courses: sequelize.import("./courses"),
  assignments: sequelize.import("./assignments"),
  student_courses: sequelize.import("./student-courses"),
  teacher_courses: sequelize.import("./teacher-courses"),
  student_assignments: sequelize.import("./student-assignments"),
  teacher_assignments: sequelize.import("./teacher-assignments")
};

Object.keys(models).forEach(model_name => {
  if ("associate" in models[model_name]) {
    models[model_name].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
