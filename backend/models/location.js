module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    area_m2: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  }, {
    hierarchy: true
  });

  return Location;
};