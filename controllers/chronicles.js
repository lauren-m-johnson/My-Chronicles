const Chronicle = require('../models/chronicle');

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
  const allChronicles = await Chronicle.find({})
  res.render('chronicles/index', { chronicles: allChronicles })
}

async function show(req, res) {
  const chronicle = await Chronicle.findById(req.params.id);
  res.render('chronicles/show', { title: 'Chronicle Logs', chronicle });
}

async function deleteChronicle(req, res) {
  try {
    await Chronicle.deleteOne({ _id: req.params.id });
    res.redirect('/chronicles');
  } catch (err) {
    console.log(err);
  }
}
