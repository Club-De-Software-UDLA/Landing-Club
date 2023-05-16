import { Model, DataTypes,Sequelize } from 'sequelize';
import { ConnectToDB }  from '../server'

const Email = ConnectToDB.define('Email', {
email: DataTypes.TEXT,

})
(async () => {
    await sequelize.sync({ force: true });
    // Code here
  })();