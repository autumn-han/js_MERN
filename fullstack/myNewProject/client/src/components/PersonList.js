import React, { useEffect, useState } from "react";
// we need to give value to the 'id' parameter written in the Detail.js path - we can import the Link element to do this
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const PersonList = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const removeFromDom = (personID) => {
    setPeople(people.filter((person) => person._id !== personID));
  };
  return (
    <div>
      {people.map((person, index) => {
        return (
          <div key={index}>
            <p>
              {person.lastName}, {person.firstName}
            </p>
            <Link to={`/people/${person._id}`}>{person.firstName}'s Page</Link>
            <Link to={`/people/edit/${person._id}`}>Edit Info</Link>
            <DeleteButton
              personID={person._id}
              successCallback={() => removeFromDom(person._id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
