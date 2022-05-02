const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
  first_name: String,
  last_name: String,
  member_id: Number,
  email: String,
  photo_url: String,
});

mongoose.model("members", memberSchema);

// const attendanceSchema = new Schema({
//   member_id: Number,
//   timeStamp: Date,
// });

// mongoose.model("attendanceLog", attendanceSchema);
