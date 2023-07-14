const Author = require('../models/author.model.jsx');

module.exports.getAll = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
};

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
};

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.json(err));
};