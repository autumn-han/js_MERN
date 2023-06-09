import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PersonForm from "./PersonForm";
import DeleteButton from "./DeleteButton";

const Update = (props) => {
  // bring in our id from the url and pass it in as part of the axios request to get the needed document and update
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res) => {
        setPerson(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const updatePerson = (personParam) => {
    axios
      .patch("http://localhost:8000/api/people/" + id, personParam)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update a Person</h1>
      {loaded && (
        <>
          <PersonForm
            onSubmitProp={updatePerson}
            initialFirstName={person.firstName}
            initialLastName={person.lastName}
          />
          <DeleteButton
            personID={person._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  );
};

export default Update;
