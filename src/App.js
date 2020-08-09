import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
  'name'  :"hello",
  'name2' : "bye"



  };

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // this.state.persons[0].name = "hardik";  DONT DO THIS
       this.setState({'name':newName})
       console.log(this.state);

  }

  

  render() {
   //without using bind keyword first one
    console.log(this.state);
    return (
      <div className="App">
        <h1>HI, I am react boy : </h1>
        <p>HELLO MUMBAI</p>
       
        <button onClick={() => this.switchNameHandler("HARDIK")}>SWITCH NAME</button>
        <Person
          name={this.state.name}

        />
        <Person
         name = {this.state.name2}
         click = {this.switchNameHandler.bind(this,"SINGH")}
        />

     </div>
    );
  }
}

export default App;
