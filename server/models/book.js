const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  // set up properties for a Book
  title: [{
    type: String,
    required: true
  }],
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;