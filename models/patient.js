module.exports = function(sequelize, DataTypes) {
  const Patient = sequelize.define("Patient", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {checkout master
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    history: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diagnosis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codeStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tests: {
      type: DataTypes.STRING,
      allowNull: false
    },
    therapies: {d
      type: DataTypes.STRING,
      allowNull: false
    },
    soap: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Patient;
};
