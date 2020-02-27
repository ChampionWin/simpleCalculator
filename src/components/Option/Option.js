import React from 'react';
import './Option.css'
class Option extends React.Component {
    render() {
        return (
            <div className="optionDiv" >
                <input type="radio" name="radio" defaultChecked  onClick={() => this.props.onchange("+")} ></input>
                <label >Plus</label><br/>
                <input type="radio" name="radio"  onClick={() => this.props.onchange("-")} ></input>
                <label >Minus</label><br/>
                <input type="radio" name="radio" onClick={() => this.props.onchange("*")} ></input>
                <label >Multiplication</label><br/>
                <input type="radio" name="radio"  onClick={() => this.props.onchange("/")} ></input>
                <label >Division</label>
            </div>
        );
    }
}

export default Option;