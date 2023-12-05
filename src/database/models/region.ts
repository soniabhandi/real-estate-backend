import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface RegionAttributes {
  id: number;
  name: string;
  city: string;
  location: string;
}

interface RegionInstance extends Model<RegionAttributes>, RegionAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Region = sequelize.define<RegionInstance>("Region", {
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
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Region;
