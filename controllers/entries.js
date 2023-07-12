const Chronicle = require('../models/chronicle');

module.exports = {
  create
};

async function create(req, res) {
    const chronicle = await Chronicle.findById(req.params.id);
    chronicle.entries.push(req.body);
    try {
      await chronicle.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/chronicles/${chronicle._id}`);
  }

