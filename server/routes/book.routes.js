const router = require('express').Router();
const { Book } = require('../models');

// restful api
// /api/book/
router
  .route('/')
  .get((req, res) => {
    Book
      .find({})
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  })
  .post((req, res) => {
    console.log({ reqBody: req.body });

    Book
      .create({
        text: req.body.text
      })
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });


// /api/book/:id
router
  .route('/:id')
  .delete((req, res) => {
    console.log(req.params);

    Book
      .findByIdAndDelete(req.params.id)
      .then(data => {
        res.json({ success: true });
      })
      .catch(err => {
        res.json({ success: false });
      });
  });

module.exports = router;