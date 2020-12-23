const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  // set up properties for a Book
  title: [{
    type: String,
    // required: true
  }],
  authors: {
    type: Array,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
    // required: true
  },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;