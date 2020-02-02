export default (sequelize, DataTypes) => {
  const assignments = sequelize.define("assignments", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deadline: DataTypes.DATE
  });

  assignments.associate = models => {
    assignments.belongsTo(models.courses, {
      foreignKey: "course_id",
      onDelete: "CASCADE"
    });
  };

  return assignments;
};
