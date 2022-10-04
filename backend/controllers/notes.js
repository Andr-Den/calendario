const Note = require('../models/notes');

module.exports.getNotes = (req, res, next) => {
  Note.find({})
    .then((note) => res.send({ data: note }))
    .catch(next);
};

module.exports.createNote = (req, res, next) => {
  const {
    name,
    description,
    date,
  } = req.body;

  Note.create({
    name,
    description,
    date,
  })
    .then((note) => res.send({ data: note }))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new Error(error.message));
      } else {
        next(error);
      }
    });
};
