'use strict';
const {
  Model
} = require('sequelize');
const pedido = require('./pedido');
module.exports = (sequelize, DataTypes) => {
  class servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      servico.belongsToMany(models.Pedido, {
        through:'ItemPedido' , foreignKey: 'PedidoId', as:'Pedidos_serv'
      });
      servico.hasMany(models.ItemPedido,{
        foreignKey:'servico', as:'item_servicos'
      })
    }
  };
  servico.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'servico',
  });
  return servico;
};