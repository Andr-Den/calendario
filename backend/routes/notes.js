const router = require('express').Router();
const {
  getNotes, createNote,
} = require('../controllers/notes');

router.get('/', getNotes);
router.post('/', createNote);

module.exports = router;
