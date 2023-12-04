import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("realestate", "root", "1234", {
  host: "localhost",
  dialect: "postgres",
});
