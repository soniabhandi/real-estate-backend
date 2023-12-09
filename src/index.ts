import dotenv from "dotenv";
dotenv.config();
import nconf from "nconf";
import path from "path";

nconf
  .argv()
  .env()
  .file({ file: path.resolve(__dirname, "../config.json") })
  .required([
    "DATABASE_URI",
    "TWILIO_ACCOUNT_SID",
    "TWILIO_AUTH_TOKEN",
    "TWILIO_PHONE_NUMBER",
  ]);

import express from "express";
import router from "./routes";
import bodyParser from "body-parser";
import { sequelize } from "./database";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    // Sync the model with the database
    await sequelize.sync({ alter: true });
    console.log("Models synced with the database.");

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
