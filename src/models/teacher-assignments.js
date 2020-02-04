export default (sequelize, DataTypes) => {
  const teacher_assignments = sequelize.define("teacher_assignments", {
    max_score: DataTypes.INTEGER
  });

  teacher_assignments.associate = models => {
    teacher_assignments.belongsTo(models.teachers, {
      foreignKey: "teacher_id",
      onDelete: "CASCADE"
    });
    teacher_assignments.belongsTo(models.assignments, {
      foreignKey: "assignment_id",
      onDelete: "CASCADE"
    });
  }

  return teacher_assignments;
};
