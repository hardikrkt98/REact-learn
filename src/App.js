import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
  person : [ {
  'name'  :"hardik",
  },
  {
  'name2' : "tanja"
  } ,
],
  showPerson : true 
  };

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // this.state.persons[0].name = "hardik";  DONT DO THIS
       this.setState({'name':newName})
       console.log(this.state);
      

  }

  nameChangeHandler = (event) => {
    
     this.setState(
        {
          'name' : event.target.value

        }   
     )
  }

  togglePersonHandler = () =>
  {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})

  };


 
  

  render() {
   

    let persons = null
    if(this.state.showPerson)
    {
       persons = (
  
        <div>
  
        <Person
          name={this.state.person[0].name}
  
        />
        <Person
         name = {this.state.person[1].name2}
         click = {this.switchNameHandler.bind(this,"SINGH")}
         nameChange = {this.nameChangeHandler}
        />
      </div>
  
       );
   
  
  
    }

    return (
      <div className="App">
        <h1>HI, I am react boy : </h1>
        <p>HELLO MUMBAI</p>
       
        <button onClick={this.togglePersonHandler}>HIDE</button>
    {persons }
    </div>
    
    );
    

}
};


export default App;
