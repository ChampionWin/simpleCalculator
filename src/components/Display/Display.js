import React from 'react';
import './Display.css'
class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1:"",
            number2:"",
            number3:"",
            operator:"+"
        }
    }
    handleChange=(event) => {       
            let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]:val});    
    }
    handleCalculate = () => {
        let a = parseInt(this.state.number1) *  parseInt(this.state.number2)
        this.setState({
            number3:a
        })

    }
    render() {
        return (
            <div className="display" >
                <div>
                  <input type="text" name="number1"  onChange={this.handleChange} className="number1" ></input>
                  <label className="option" > {this.state.operator} </label>
                  <input type="text" name="number2"  onChange={this.handleChange} className="number2" ></input>
                  <label className="result" >=</label>
                  <input  type="text" name="number3"  value={this.state.number3} className="number3" readOnly ></input>
                </div>
                <div className="div2" >
                    <button onClick={this.handleCalculate} >Calculate</button>
                </div>
            </div>
        );
    }
}

export default Display;