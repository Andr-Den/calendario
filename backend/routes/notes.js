const router = require('express').Router();
const {
  getNotes, createNote, deleteNote,
} = require('../controllers/notes');

router.get('/', getNotes);
router.post('/', createNote);
router.delete('/:_id', deleteNote);

module.exports = router;
