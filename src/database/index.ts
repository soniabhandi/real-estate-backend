import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("nestquest", "root", "1234", {
  host: "localhost",
  dialect: "postgres",
});
