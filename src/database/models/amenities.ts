import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface AmenitiesAttributes {
  id: number;
  name: string;
  icon: string;
}

interface AmenitiesInstance
  extends Model<AmenitiesAttributes>,
    AmenitiesAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Amenities = sequelize.define<AmenitiesInstance>("Amenities", {
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
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Amenities;
