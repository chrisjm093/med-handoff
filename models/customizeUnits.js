//create customisableunit table where we can add/remove units

module.exports = function(sequelize, DataTypes) {
  const CustomizeUnit = sequelize.define("CustomizeUnit", {
    unitName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return CustomizeUnit;
};
