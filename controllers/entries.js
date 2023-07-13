const Chronicle = require('../models/chronicle');

module.exports = {
  create,
  delete: deleteEntry,
  edit,
  update
};


async function update(req, res) {
  try {
    const chronicle = await Chronicle.findOne({ 'entries._id': req.params.id });
    const entrySubdoc = chronicle.entries.id(req.params.id);
    if (!chronicle) return res.redirect('/chronicles');
    entrySubdoc.mood = req.body.mood;
    entrySubdoc.water = req.body.water;
    entrySubdoc.exercise = req.body.exercise;
    entrySubdoc.sleep = req.body.sleep;
    entrySubdoc.anxiety = req.body.anxiety;
    entrySubdoc.journal = req.body.journal;
    await chronicle.save();
    const updatedEntry = chronicle.entries.id(req.params.id);
    res.redirect(`/chronicles/${chronicle._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    const chronicle = await Chronicle.findOne({ 'entries._id': req.params.id });
    const entry = chronicle.entries.id(req.params.id);
    res.render('chronicles/edit', {
      entry,
      selectedValues: {
        mood: entry.mood,
        water: entry.water,
        exercise: entry.exercise,
        sleep: entry.sleep,
        anxiety: entry.anxiety,
        journal: entry.journal
      }
    });
  } catch (err) {
    console.log(err);
  }
}


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



  