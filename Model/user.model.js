import mongoose from "mongoose";
import { Schema } from "mongoose";
//new Schema is created
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
});
//new Model is created
const userModel = mongoose.model("User", userSchema);
export default userModel;
