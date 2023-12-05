import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface LocationAttributes {
  id: number;
  name: string;
  city: string;
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Location;
