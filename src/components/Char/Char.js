import React, {Component} from 'react'


class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const style = {
            display:  'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }
        const splitChar = this.props.nameChar.split('');
        let getChar = splitChar.map((val, index) => <div onClick={this.props.clickedVal} id={index} key={index} style={style}>{val}</div>)
        return (
           <div>
               {getChar}
           </div>
        );
    }
}

export default Char;