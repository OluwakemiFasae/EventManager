'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Centre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Centre.hasMany(models.events, {
        foreignKey: 'centreId',
      });
    }
  };
  Centre.init({
    Name: DataTypes.STRING,
    State: DataTypes.STRING,
    Town: DataTypes.STRING,
    Street: DataTypes.STRING,
    Capacity: DataTypes.INTEGER,
    ChairNo: DataTypes.INTEGER,
    Electricity: DataTypes.BOOLEAN,
    AC: DataTypes.BOOLEAN,
    Sound_System: DataTypes.BOOLEAN,
    cost_per_day: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Centre',
  });
  return Centre;
};