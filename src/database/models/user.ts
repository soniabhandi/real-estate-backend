// models/user.js
import { Model, Optional } from "sequelize";
import { sequelize } from "..";

const { DataTypes } = require("sequelize");

interface UserAttributes {
  id: number;
  phoneNo: string;
  name: number;
  email: string;
  location: string;
  city: string;
  ipAddress: string;
  deviceId: string;
  role: string;
}

interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    "id" | "email" | "location" | "city" | "ipAddress" | "deviceId" | "role"
  > {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deviceId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
