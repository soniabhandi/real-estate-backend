import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface LocationAttributes {
  id: number;
  type: string;
  title: string;
  offeredBy: string;
}

interface LocationInstance
  extends Model<LocationAttributes>,
    LocationAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Location = sequelize.define<LocationInstance>("Location", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  offeredBy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Location;
