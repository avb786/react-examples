import React, { Component } from "react";
// import Radium from 'radium'
import Persons from '../components/Persons/Persons';
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import Cockpit from "../components/Cockpits/Cockpits";

class App extends Component {

  constructor(props) {
    super(props)
    console.log('[App.js] constructor');
    this. state = {
      persons: [
        { id: 1, name: "Aayush Patel", age: 22 },
        { id: 2, name: "Ujwal Seth", age: 12 },
        { id: 3, name: "Riya Singh", age: 20 },
      ],
      nameLen: 0,
      name: "",
      showContent: false,
      showCockpit: true
    };  
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps()', props)
    return state;

  }

  componentDidMount() {
    console.log("[App.js]: componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate")
    return true
  }
 
  componentDidUpdate(nextProps, nextState) {
    console.log("[App.js] componentDidUpdate")
  }
  switchNameHandler = (nameProp) => {
    this.setState({
      persons: [
        { id: 1, name: nameProp, age: 22 },
        { id: 2, name: "Ujwal Seth", age: 12 },
        { id: 3, name: "Riya Singh", age: 20 },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (valId) => valId.id === id
    );
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  deletePerson = (index) => {
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({
      persons: person,
    });
  };
  togglePersonContents = () => {
    let tooglePerson = !this.state.showContent;
    this.setState({
      showContent: tooglePerson,
    });
  };

  calcLengthOfText(event) {
    const nameLen = event.target.value;
    this.setState({
      nameLen: nameLen.length,
      name: event.target.value,
    });
  }

  valueClicked(event) {
    let str = "";
    let shallowCopy = [...this.state.name];
    for (const text in shallowCopy) {
      if (text !== event.target.id) str += shallowCopy[text];
    }
    this.setState({
      name: str,
      nameLen: str.length
    });
  }

  render() {
    console.log('[App.js] : render()')
    const colors = ['red', 'bold'].join(' ');
    const style = {
      backgroundColor: "orange",
      padding: "8px",
      border: "solid 1px white",
      font: "monospace",
      color: "white",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "pink"
      }
    };

    let person = null;
    if (this.state.showContent) {
      person = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.nameChangeHandler} />
          {/* { <Person 
        name={this.state.persons[0].name}
         age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, "Vijay")} />
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         changed = {this.nameChangeHandler}
          />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />} */}
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={() => this.setState({ showCockpit: false })}>Show Cockpit</button>
        {this.state.showCockpit? <Cockpit togglePersonContents={this.togglePersonContents} switchNameHandler={this.switchNameHandler} /> : null}
        {person}
        <br />
        <label for="nameLen">
          Name(Lenght)
          <input
            id="nameLen"
            value={this.state.name}
            type="text"
            onChange={(event) => this.calcLengthOfText(event)}
          />
          <br />
          <p>Lenght: {this.state.nameLen}</p>
        </label>
        <Validation nameLength={this.state.nameLen} />
        <Char
          clickedVal={(event) => this.valueClicked(event)}
          nameChar={this.state.name}
        />
      </div>
    );
  }
}

export default App;
