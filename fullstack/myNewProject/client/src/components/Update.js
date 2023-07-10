import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
  // bring in our id from the url and pass it in as part of the axios request to get the needed document and update
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      })
      .catch((err) => console.log(err));
  }, []);
  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .patch("http://localhost:8000/api/people/" + id, {
        firstName: firstName,
        lastName: lastName,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update a Person</h1>
      <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
