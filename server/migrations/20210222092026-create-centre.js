'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Centres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Town: {
        type: Sequelize.STRING
      },
      Street: {
        type: Sequelize.STRING
      },
      Capacity: {
        type: Sequelize.INTEGER
      },
      ChairNo: {
        type: Sequelize.INTEGER
      },
      Electricity: {
        type: Sequelize.BOOLEAN
      },
      AC: {
        type: Sequelize.BOOLEAN
      },
      Sound_System: {
        type: Sequelize.BOOLEAN
      },
      cost_per_day: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Centres');
  }
};