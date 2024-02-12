const User = require("../models/schema");

module.exports.send = async (req, res) => {
  try {
    const data = new User(req.body);
    await data.save();
    res.status(202).json({ msg: "Registered" });
  } catch (e) {
    res.status(404).json({ msg: "Error" });
  }
};
