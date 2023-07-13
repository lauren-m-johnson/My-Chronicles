const Chronicle = require('../models/chronicle');

module.exports = {
  create,
  delete: deleteEntry
};

async function deleteEntry(req, res) {
    const chronicle = await Chronicle.findOne({ 'entries._id': req.params.id });
    if (!chronicle) return res.redirect('/chronicles');
    chronicle.entries.remove(req.params.id);
    await chronicle.save();
    res.redirect(`/chronicles/${chronicle._id}`);
  }

async function create(req, res) {
    const chronicle = await Chronicle.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    chronicle.entries.push(req.body);
    try {
      await chronicle.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/chronicles/${chronicle._id}`);
  }



  