module.exports = function(sequelize, DataTypes) {
  const Patient = sequelize.define("Patient", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    history: {
      type: DataTypes.STRING
    },
    diagnosis: {
      type: DataTypes.STRING
    },
    codeStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tests: {
      type: DataTypes.STRING
    },
    therapies: {
      type: DataTypes.STRING
    },
    soap: {
      type: DataTypes.STRING
    }
  });

  return Patient;
};
