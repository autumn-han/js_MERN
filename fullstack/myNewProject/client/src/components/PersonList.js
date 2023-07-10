import React, { useEffect } from "react";
// we need to give value to the 'id' parameter written in the Detail.js path - we can import the Link element to do this
import { Link } from "react-router-dom";
import axios from "axios";

const PersonList = (props) => {
  const { removeFromDom, people, setPeople } = props;
  const deletePerson = (personID) => {
    axios
      .delete("http://localhost:8000/api/people/" + personID)
      .then((res) => {
        removeFromDom(personID);
      })
      .catch((err) => console.log(err));
  };
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
            <button onClick={(e) => deletePerson(person._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
