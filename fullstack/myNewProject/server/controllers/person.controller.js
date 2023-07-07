const Person = require('../models/person.model');

module.exports.index = (req, res) => {
    res.json({ message: 'Hello World' });
};

// the create method is run using the Person model to add a new person to the db's person collection
// req.body will contain something like {firstName: "Billy", lastName: "Smith"} from the client
// we pass this into our Person.create method as Person.create(req.body)
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err));
};

module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => {
            console.log(persons);
            res.json(persons);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};