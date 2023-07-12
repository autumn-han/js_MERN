import React, { useState } from "react";
import axios from "axios";

const PersonForm = (props) => {
  // with lifted state, we can hand down the properties of the parent Main.js to the child components PersonForm and PersonList via props
  const { initialFirstName, initialLastName, onSubmitProp } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </p>
      <p>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default PersonForm;
