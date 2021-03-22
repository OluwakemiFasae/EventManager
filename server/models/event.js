'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Event.belongsTo(models.Centre, {
        foreignKey: 'centreId',
      });
    }
  };
  Event.init({
    Tag: DataTypes.STRING,
    Description: DataTypes.STRING,
    EventDate: DataTypes.DATE,
    EventTime: DataTypes.TIME,
    DateBooked: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    UserId: DataTypes.INTEGER,
    CentreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};