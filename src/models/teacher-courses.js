export default (sequelize, DataTypes) => {
  const teacher_courses = sequelize.define("teacher_courses");

  teacher_courses.associate = models => {
    teacher_courses.belongsTo(models.teachers, {
      foreignKey: "teacher_id",
      onDelete: "CASCADE"
    });
    teacher_courses.belongsTo(models.courses, {
      foreignKey: "course_id",
      onDelete: "CASCADE"
    });
  }

  return teacher_courses;
};
