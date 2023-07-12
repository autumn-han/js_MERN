import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { personID, successCallback } = props;
  const deletePerson = (e) => {
    axios
      .delete("http://localhost:8000/api/people/" + personID)
      .then((res) => {
        successCallback();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={deletePerson}>Delete</button>
    </div>
  );
};

export default DeleteButton;
