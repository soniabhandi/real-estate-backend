import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface FAQAttributes {
  id: number;
  desc: string;
}

interface FAQInstance extends Model<FAQAttributes>, FAQAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const FAQ = sequelize.define<FAQInstance>("FAQ", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default FAQ;
