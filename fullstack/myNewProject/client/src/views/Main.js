import React, { useState } from "react";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = (props) => {
  const [people, setPeople] = useState([]);
  const removeFromDom = (personID) => {
    setPeople(people.filter((person) => person._id != personID));
  };
  return (
    <div>
      <PersonForm people={people} setPeople={setPeople} />
      <PersonList
        people={people}
        setPeople={setPeople}
        removeFromDom={removeFromDom}
      />
    </div>
  );
};

export default Main;
