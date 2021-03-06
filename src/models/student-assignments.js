export default (sequelize, DataTypes) => {
  const student_assignments = sequelize.define("student_assignments", {
    achieved_score: DataTypes.INTEGER 
  });

  student_assignments.associate = models => {
    student_assignments.belongsTo(models.students, {
      foreignKey: "student_id",
      onDelete: "CASCADE"
    });
    student_assignments.belongsTo(models.assignments, {
      foreignKey: "assignments_id",
      onDelete: "CASCADE"
    });
  }

  return student_assignments;
};
