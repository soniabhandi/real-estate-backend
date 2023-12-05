import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface ConfigurationAttributes {
  id: number;
  name: string;
}

interface ConfigurationInstance
  extends Model<ConfigurationAttributes>,
    ConfigurationAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Configuration = sequelize.define<ConfigurationInstance>("Configuration", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Configuration;
