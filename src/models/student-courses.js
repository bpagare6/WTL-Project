export default (sequelize, DataTypes) => {
  const student_courses = sequelize.define("student_courses");

  student_courses.associate = models => {
    student_courses.belongsTo(models.students, {
      foreignKey: "student_id",
      onDelete: "CASCADE"
    });
    student_courses.belongsTo(models.courses, {
      foreignKey: "course_id",
      onDelete: "CASCADE"
    });
  }

  return student_courses;
};
