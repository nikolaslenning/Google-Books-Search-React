const router = require('express').Router();
const books = require('./book.routes');

// /api/todo
router.use('/api/todo', books);

module.exports = router;