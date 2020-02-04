/* File to handle User Activities */
import models from "../models/index";
import bcrypt from "bcrypt";
import config from "../config";

// Authentication Function
async function authenticate_user(user) {
  var valid_user = false,
    authenticated_user = false;

  const valid_username =
    typeof user.username == "string" && user.username.trim() != "";
  const valid_password =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim().length >= 6;

  valid_user = valid_username && valid_password;

  if (user.isteacher) {
    authenticated_user = models.teachers
      .findOne({
        where: {
          username: user.username
        }
      })
      .then(dbuser => {
        if (!dbuser) {
          // No User found
          authenticated_user = false;
        } else {
          var password = dbuser["dataValues"]["password"];
          return bcrypt.compareSync(user.password, password);
        }
      });
  } else {
    return models.students
      .findOne({
        where: {
          username: user.username
        }
      })
      .then(dbuser => {
        if (!dbuser) {
          // No User found
          authenticated_user = false;
        } else {
          var password = dbuser["dataValues"]["password"];
          return bcrypt.compareSync(user.password, password);
        }
      });
  }

  return valid_user && authenticated_user;
}

export default {
  authenticate_user
};
