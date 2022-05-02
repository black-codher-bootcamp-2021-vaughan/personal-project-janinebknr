const mongoose = require("mongoose");
const Member = mongoose.model("members");

const memberRoutes = (app) => {
  app.get(`/api/member`, async (req, res) => {
    const members = await Member.find();

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

    const member = await Member.findByIdAndUpdate(id, req.body);

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
