import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "..";

interface LocationAttributes {
  id: number;
  name: string;
  city: string;
}

interface LocationCreationAttributes
  extends Optional<LocationAttributes, "id"> {}

interface LocationInstance
  extends Model<LocationAttributes, LocationCreationAttributes>,
    LocationAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Location = sequelize.define<LocationInstance>("Location", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
