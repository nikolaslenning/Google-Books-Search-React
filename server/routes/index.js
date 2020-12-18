const router = require('express').Router();
const books = require('./book.routes');

// /api/todo
router.use('/api/book', books);

module.exports = router;