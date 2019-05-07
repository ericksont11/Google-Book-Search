const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
    findById: function(req, res) {
        db.Book
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => console.log(err));
    },
    create: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => console.log(err));
    },
    update: function(req, res) {
        db.Book
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => console.log(err));
    },
    remove: function(req, res) {
    db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    }
};