import mongoose from "mongoose";
import { Schema } from "mongoose";
//new Schema is created
const userSchema = new Schema({
  firstname: String,
  lastname: String,
  hobby: String,
});
//new Model is created
const userModel = mongoose.model("User", userSchema);
export default userModel;
