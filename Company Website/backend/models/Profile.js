const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserProfileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
});
const ProjectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});
const NotificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});
module.exports = {
  UserProfile: mongoose.model("UserProfile", UserProfileSchema),
  Project: mongoose.model("Project", ProjectSchema),
  Notification: mongoose.model("Notification", NotificationSchema),
};
