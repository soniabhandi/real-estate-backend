import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface BrandAttributes {
  id: number;
  name: string;
  logo: string;
}

interface BrandInstance extends Model<BrandAttributes>, BrandAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Brand = sequelize.define<BrandInstance>("Brand", {
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
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Brand;
