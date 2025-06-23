import mongoose from "mongoose";
import dotenv from "dotenv";
import { createApp } from "./createApp.mjs";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected database");
  })
  .catch((err) => console.log(`Error: ${err}`));

const app = createApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (request, response) => {
  console.log(`Running on PORT ${PORT}`);
});
