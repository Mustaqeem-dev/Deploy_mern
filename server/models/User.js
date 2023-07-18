import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  forgetPasswordAuthToken: String,
  jobs: [
    {
      fullName: String,
      email: String,
      jobTitle:String,
      phoneNumber: String,
      coverLetter: String,
      Files: String,
    },
  ],
});

export const User = mongoose.model("User", userSchema);
