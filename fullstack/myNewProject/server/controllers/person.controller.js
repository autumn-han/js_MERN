const Person = require("../models/person.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

// CREATE
// the create method is run using the Person model to add a new person to the db's person collection
// req.body will contain something like {firstName: "Billy", lastName: "Smith"} from the client
// we pass this into our Person.create method as Person.create(req.body)
module.exports.createPerson = (req, res) => {
  Person.create(req.body)
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};

// READ one
module.exports.getPerson = (req, res) => {
  // the findOne method requires info that Mongoose will use to query the database; here we're using _id
  // the client's request has an attribute called 'params' - we can name params whatever we want but it MUST MATCH the route
  // e.g. (_id: req.params.id -> /api/people/:id)
  Person.findOne({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};

// READ all
module.exports.getAllPeople = (req, res) => {
  Person.find({})
    .then((persons) => {
      console.log(persons);
      res.json(persons);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

// UPDATE
// the {new: true} parameter returns the updated document instead of the default of sending the original doc before the update
module.exports.updatePerson = (req, res) => {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedPerson) => res.json(updatedPerson))
    .catch((err) => res.json(err));
};

// DELETE
// delCon = deletion confirmed
module.exports.deletePerson = (req, res) => {
  Person.deleteOne({ _id: req.params.id })
    .then((delCon) => res.json(delCon))
    .catch((err) => res.json(err));
};
