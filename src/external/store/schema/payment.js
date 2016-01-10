import Sequelize from 'sequelize';

export default {
  attrs: {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  dbSettings: {
    tableName: 'payment',
  },
};
