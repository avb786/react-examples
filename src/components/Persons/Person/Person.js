import React from 'react'
import '../Person/Person.css'
class Person extends React.Component  {
constructor(props) {
    super(props)

}
    render() {
        console.log("[Person.js] rendering.....");
        return (
            <div className="Person">
            <p onClick={this.props.click}>I am a cool {this.props.status} {this.props.name}. My age is {this.props.age} .{this.props.children ? this.props.children : ''}</p>
            <input type="text" onChange={this.props.changed}/>
            </div>
        );
    }
}

export default Person;

