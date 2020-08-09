import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  // console.log("was clicked");
  // this.state.persons[0].name = "hardik";  DONT DO THIS
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "hardik", age: "23" },

      { name: "ramesh", age: "43" },
    ],
  });
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "bye", age: "23" },

        { name: "ramesh", age: "43" },
      ],
    });
  };

  return (
    <div className="App">
      <h1>HI, I am react boy : </h1>
      <p>HELLO MUMBAI</p>
      <button onClick={switchNameHandler}>SWITCH NAME</button>
      <Person
        name={personState.persons[0].name}
        Age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        Age={personState.persons[1].age}
      >
        HELLO WORLD
      </Person>{" "}
    </div>
  );
};
export default App;
