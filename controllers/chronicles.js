const Chronicle = require('../models/chronicle');
const prompts = require('./prompts');

module.exports = {
    new: newChronicle,
    create,
    index,
    show,
    delete: deleteChronicle
  };

  function newChronicle(req, res) {
    res.render('chronicles/new', { errorMsg: '' });
  }

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  try {
    const chronicle = await Chronicle.create(req.body);
    res.redirect(`/chronicles/${chronicle._id}`); 
  } catch (err) {
    console.log(err);
    res.render('chronicles/new', { errorMsg: err.message });
  }
}

async function index(req, res) {
  const loggedInUserId = req.user.id;
  const userChronicles = await Chronicle.find({ user: loggedInUserId})
  res.render('chronicles/index', { chronicles: userChronicles })
}

async function show(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const chronicle = await Chronicle.findById(req.params.id);
  const randomPrompt = prompts.getRandomPrompt();
  res.render('chronicles/show', { title: 'Chronicle Logs', chronicle, randomPrompt });
}

async function deleteChronicle(req, res) {
  try {
    await Chronicle.deleteOne({ _id: req.params.id });
    res.redirect('/chronicles');
  } catch (err) {
    console.log(err);
  }
}
