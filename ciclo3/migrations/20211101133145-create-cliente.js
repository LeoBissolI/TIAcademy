'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ClienteId: { 
        type:sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },     
      nascimento: {
        type: Sequelize.DATEONLY
      },
      clienteDesde: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('Clientes');
  }
};