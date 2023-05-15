import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database'; 

class Email extends Model {
  public id!: number;
  public email!: string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Email.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, 
      },
    },
  },
  {
    sequelize,
    modelName: 'Email',
    tableName: 'emails',
  }
);

export default Email;
