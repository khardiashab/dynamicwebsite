const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  email : String,
  Comment : String,
})
  const User = new mongoose.model("User", userSchema)

module.exports = User