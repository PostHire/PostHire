import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, default: "" },
  skills: { type: [String], default: [] },
  experience: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  banner: { type: String, default: "" },
  plan: { type: String, default: "free" },
  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
