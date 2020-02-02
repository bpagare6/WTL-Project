export default (sequelize, DataTypes) => {
  const courses = sequelize.define("courses", {
    course_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: DataTypes.TEXT,
    credits: DataTypes.INTEGER
  });

  return courses;
};
