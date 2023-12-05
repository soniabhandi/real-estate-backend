import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface FAQAttributes {
  id: number;
  name: string;
  icon: string;
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default FAQ;
