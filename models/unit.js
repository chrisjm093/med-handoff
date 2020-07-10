module.exports = function(sequelize, DataTypes) {
  const Unit = sequelize.define("Unit", {
    unitName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Unit.associate = function(models) {
    /* Unit.hasMany(models.Paitents); */
    Unit.hasMany(models.Practitioner);
  };

  return Unit;
};
