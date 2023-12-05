import { Model, DataTypes } from "sequelize";
import { sequelize } from "..";

interface ArticleAttributes {
  id: number;
  image: string;
  desc: string;
}

interface ArticleInstance extends Model<ArticleAttributes>, ArticleAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Article = sequelize.define<ArticleInstance>("Article", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Article;
