import mongoose from "mongoose";
import colors from "colors";

export default async (host, dbName) => {
  try {
    mongoose
      .connect(host, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log(`${dbName} database is connected`.cyan.inverse));
  } catch (err) {
    console.log("Error connecting to database".red.underline);
  }
};
