const Chronicle = require('../models/chronicle');

module.exports = {
    new: newChronicle,
    create,
    show
  };

  function newChronicle(req, res) {
    res.render('chronicles/new', { errorMsg: '' });
  }


async function create(req, res) {
  try {
    const chronicle = await Chronicle.create(req.body);
    res.redirect(`/chronicles/${chronicle._id}`);
  } catch (err) {
    console.log(err);
    res.render('chronicles/new', { errorMsg: err.message });
  }
}

async function show(req, res) {
  const chronicle = await Chronicle.findById(req.params.id);
  res.render('chronicles/show', { title: 'Chronicle Logs', chronicle });
}


// async function index(req, res) {
//   const allChronicles = await Chronicle.find({})
//   console.log(allChronicles)
//   res.render('Chronicles/index', { chronicles: allChronicles })
// }