const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  member_id: Number,
  timeStamp: Date,
});

mongoose.model("attendanceLog", attendanceSchema);
