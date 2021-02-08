import React from 'react'
import Person from './Person/Person'

class Persons extends React.Component {

  static getDerivedStateStateFromProps(props, state) {
    console.log('[Persons.js] : getDerivedStateStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate')
    if(nextProps.persons !== this.props.persons)
    return true
    else return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate')
    return {message: 'SnapShot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Person.js] componentDidUpdate')
    console.log('[Person.js] componentDidUpdate -> snapshot', snapshot)

  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }
  render()  {
    console.log('[Persons.js] rendering....')
    return this.props.persons.map((person, index) => {
        return (
          <Person
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
          />
        );
      })
    }

  }
 
export default Persons;