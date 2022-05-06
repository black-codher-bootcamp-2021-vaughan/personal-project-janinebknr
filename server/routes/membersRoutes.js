const mongoose = require("mongoose");
const Member = mongoose.model("members");

const memberRoutes = (app) => {
  app.get(`/api/member`, async (req, res) => {
    const members = await Member.find().sort({ last_name: 1 });

    return res.status(200).send(members);
  });

  app.post(`/api/member`, async (req, res) => {
    const member = await Member.create(req.body);

    return res.status(201).send({
      error: false,
      member,
    });
  });

  app.put(`/api/member/:id`, async (req, res) => {
    const { id } = req.params;
    console.log(Number(req.params.id));
    const member = await Member.find({ member_id: Number(id) });
    const updateAttendanceLog = await Member.updateOne(
      { member_id: Number(id) },
      { attendance_log: [...member[0].attendance_log, new Date()] }
    );
    // console.log(updateAttendanceLog);
    return res.status(202).send({
      error: false,
      member,
    });
  });

  app.delete(`/api/member/:id`, async (req, res) => {
    const { id } = req.params;

    const member = await Member.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      member,
    });
  });
};

module.exports = memberRoutes;
