import React from 'react';
import './App.css';
import Display from './components/Display/Display';
import Option from './components/Option/Option';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "+"
        };
  }
  handleChange = (op) => {
    this.setState({operator:op});
  }
  render() {
    return (
      <div className="App">
        <div>
          Calculator
        </div>
      <Display op={this.state.operator } />
      <Option onchange={this.handleChange} />
      </div>
  )}
}

export default App;
