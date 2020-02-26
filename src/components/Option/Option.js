import React from 'react';
import './Option.css'
class Option extends React.Component {
    render() {
        return (
            <div className="optionDiv" >
                
                <input type="checkbox" name="plus"></input>
                <label for="plus">Plus</label><br></br>
                <input type="checkbox" name="minus"></input>
                <label for="minus">Minus</label><br></br>
                <input type="checkbox" name="multiplication"></input>
                <label for="multiplication">Multiplication</label><br></br>
                <input type="checkbox" name="division"></input>
                <label for="division">Division</label><br></br>
                
            </div>
        );
    }
}

export default Option;