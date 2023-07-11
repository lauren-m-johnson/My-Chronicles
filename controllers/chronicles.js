module.exports = {
    new: newChronicle
  };

  function newChronicle(req, res) {
    res.render('chronicles/new', { errorMsg: '' });
  }