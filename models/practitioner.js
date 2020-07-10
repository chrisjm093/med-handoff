//creating Practitioner table

module.exports = function(sequelize, DataTypes) {
  const Practitioner = sequelize.define("Practitioner", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNul: false
    },
    shift: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // association between practitioner and unit
  Practitioner.associate = function(models) {
    Practitioner.belongsTo(models.Unit);
  };

  return Practitioner;
};
