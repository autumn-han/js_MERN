const AuthorController = require('../controllers/authors.controller.jsx');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAll);
    app.get('/api/authors/:id', AuthorController.getOne);
    app.post('/api/authors', AuthorController.createAuthor);
    app.patch('/api/authors/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
};