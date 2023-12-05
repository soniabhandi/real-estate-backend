import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface CityAttributes {
  id: number;
  name: string;
}

interface CityInstance extends Model<CityAttributes>, CityAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const City = sequelize.define<CityInstance>("City", {
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

export default City;
