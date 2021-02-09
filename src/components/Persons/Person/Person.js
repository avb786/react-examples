import React from 'react'
import '../Person/Person.css'
import Auxillary from '../../../hoc/Auxillary';
import AuthContext from '../../../context/auth-context'
class Person extends React.Component  {
constructor(props) {
    super(props)

    this.inputEle = React.createRef();

}

componentDidMount() {
    this.inputEle.current.focus()
}

    render() {
        console.log("[Person.js] rendering.....");
        return (
            <React.Fragment>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? 'Authenticated' : 'Not Authenticated'}
                </AuthContext.Consumer>
            <p onClick={this.props.click}>I am a cool {this.props.status} {this.props.name}. My age is {this.props.age} .{this.props.children ? this.props.children : ''}</p>
            <input type="text"
            // ref={(ele) => {this.inputEle = ele}}
            ref={this.inputEle}
             onChange={this.props.changed}/>
            </React.Fragment>
        );
    }
}

export default Person;

