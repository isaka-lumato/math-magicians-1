import React from 'react';
import './calculator.css';

const Square = () => (
  <div className="button-wrap">
    <span className="button span_5">0</span>
    <span className="button">AC</span>
    <span className="button">+/-</span>
    <span className="button">%</span>
    <span className="button colored">&divide;</span>
    <span className="button">7</span>
    <span className="button">8</span>
    <span className="button">9</span>
    <span className="button colored">&times;</span>
    <span className="button">4</span>
    <span className="button">5</span>
    <span className="button">6</span>
    <span className="button colored">&minus;</span>
    <span className="button">1</span>
    <span className="button">4</span>
    <span className="button">3</span>
    <span className="button colored">+</span>
    <span className="button span_3">0</span>
    <span className="button">.</span>
    <span className="button colored">=</span>
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-wrap">
          <Square />
        </div>
      </div>
    );
  }
}

export default Calculator;
