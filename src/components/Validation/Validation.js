import React, {Component} from 'react'

class Validation extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    validation = (len) => {
        if(len > 10) {
            return <p>Text Long Enough</p>
        }
        if(len < 5) {
            return <p>Text too Short</p>
        }
        return <p>Level: Good</p>
    }
    render() {
        return (
            <div>
                {this.validation(this.props.nameLength)}
            </div>
        );
    }
}

export default Validation;