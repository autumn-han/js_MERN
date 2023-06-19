const express = require("express");
const app = express();
const {faker} = require('@faker-js/faker');
const port = 8000;

const createUser = () => {
    const fakeUser = {
        user_id: faker.number.int({max: 100}),
        user_fname: faker.person.firstName(),
        user_lname: faker.person.lastName(),
        phoneNum: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        comp_id: faker.number.int({max: 100}),
        comp_name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return fakeCompany;
}

const newFakeUser = createUser();
const newFakeComp = createCompany();
const newFakeBoth = {user: createUser(), company: createCompany()};

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeComp);
});

app.get("/api/user/company", (req, res) => {
    res.json(newFakeBoth);
});

app.listen( port, () => console.log('Listening on port: ${port}') );