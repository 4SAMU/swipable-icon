//model/user.model.ts

import mongoose, { Schema, Document } from "mongoose";


// export interface UserDocument extends Document {
//   name: string;
//   email: string;
//   password: string;
// }

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
