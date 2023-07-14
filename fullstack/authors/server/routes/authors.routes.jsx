const AuthorController = require('../controllers/authors.controller.jsx');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAll);
    app.post('/api/authors', AuthorController.createAuthor);
};