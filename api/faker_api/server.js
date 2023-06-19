const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const createUser = () => {
    const fakeUser = {
        user_id: faker.user_id(),
        user_fname: faker.firstName(),
        user_lname: faker.lastName(),
        phoneNum: faker.phoneNum(),
        email: faker.email(),
        password: faker.password()
    };
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        comp_id: faker.comp_id(),
        comp_name: faker.comp_name(),
        address: {
            street: faker.street(),
            city: faker.city(),
            state: faker.state(),
            zipCode: faker.zipCode(),
            country: faker.country()
        }
    };
    return fakeCompany;
}

app.listen(port, () => console.log('Listening on port: ${port}'));