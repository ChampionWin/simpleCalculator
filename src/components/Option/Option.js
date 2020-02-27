import React from 'react';
import './Option.css'
class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            operator:'='
        }
    }
    checkBox = (op) => {
        this.setState({operator: op})
    }
    render() {
        return (
            <div className="optionDiv" >
                <input type="checkbox" name="plus"  onClick={() => this.checkBox('+')} ></input>
                <label >Plus</label><br></br>
                <input type="checkbox" name="minus"  onClick={() => this.checkBox('-')} ></input>
                <label >Minus</label><br></br>
                <input type="checkbox" name="multiplication" onClick={() => this.checkBox('*')} ></input>
                <label >Multiplication</label><br></br>
                <input type="checkbox" name="division"  onClick={() => this.checkBox('/')} ></input>
                <label >Division</label><br></br>
                {this.state.operator}
            </div>
        );
    }
}

export default Option;