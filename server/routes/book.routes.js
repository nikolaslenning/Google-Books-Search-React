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
      .create(
        {
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
      }
      )
      .then(data => {
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false, err });
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
        res.json({ success: true, data });
      })
      .catch(err => {
        res.json({ success: false, err });
      });
  });

module.exports = router;