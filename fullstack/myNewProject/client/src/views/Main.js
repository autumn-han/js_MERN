import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const removeFromDom = (personID) => {
    axios
      .delete("http://localhost:8000/api/people/" + personID)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPeople(people.filter((person) => person._id != personID));
      })
      .catch((err) => console.log(err));
  };
  const createPerson = (personParam) => {
    axios
      .post("http://localhost:8000/api/people", personParam)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPeople([...people, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <PersonForm
        onSubmitProp={createPerson}
        initialFirstName=""
        initialLastName=""
      />
      <PersonList people={people} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
