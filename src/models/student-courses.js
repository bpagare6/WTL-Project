export default (sequelize, DataTypes) => {
  const student_courses = sequelize.define("student_courses");

  return student_courses;
};
