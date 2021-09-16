import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const input = document.querySelector('.input');
    if (next !== null) {
      input.value = next;
    } else if (total !== null) {
      input.value = total;
    }
  }

  handleClick(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.textContent));
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-wrap">
          <div className="button-wrap">
            <input className="button span_5 input" placeholder="0" />
            <button className="button" type="button" onClick={this.handleClick}>
              AC
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              +/-
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              %
            </button>
            <button
              className="button colored"
              type="button"
              onClick={this.handleClick}
            >
              ÷
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              7
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              8
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              9
            </button>
            <button
              className="button colored"
              type="button"
              onClick={this.handleClick}
            >
              x
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              4
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              5
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              6
            </button>
            <button
              className="button colored"
              type="button"
              onClick={this.handleClick}
            >
              -
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              1
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              2
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              3
            </button>
            <button
              className="button colored"
              type="button"
              onClick={this.handleClick}
            >
              +
            </button>
            <button
              className="button span_3"
              type="button"
              onClick={this.handleClick}
            >
              0
            </button>
            <button className="button" type="button" onClick={this.handleClick}>
              .
            </button>
            <button
              className="button colored"
              type="button"
              onClick={this.handleClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
