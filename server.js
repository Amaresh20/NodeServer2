import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/user.routes.js";
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("server running at 3000");
});
routes(app);
mongoose.connect("mongodb://localhost:27017");
//to check mongodb is connected or not
const db = mongoose.connection;
db.on("open", () => {
  console.log("mongodb is connected");
});
db.on("error", () => {
  console.log("mongodb is not connected");
});
