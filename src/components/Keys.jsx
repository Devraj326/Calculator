

import React, { Component } from 'react';
import Displayy from './Displayy';
import './Keys.css';
import { useState } from 'react';

class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
    };
  }

  handleClickBtn = (e) => {
    this.setState({ expression: this.state.expression + e.target.value });
  };

  handleCalculate = () => {
    this.setState({ expression: eval(this.state.expression) });
  };

  handleClickDelete = () => {
    let newExp = this.state.expression;
    if (typeof newExp !== 'string') {
      newExp = this.state.expression.toString();
    }
    this.setState({ expression: newExp.slice(0, -1) });
  };

  handleClickAC = () => {
    this.setState({ expression: '' });
  };

  render() {
    return (
      <div className="calculator">
       <div className='display'> <Displayy expression={this.state.expression} /></div>

        <div className="row1">
          <button className='white long1' onClick={this.handleClickAC}>AC</button>
          <button className='white' onClick={this.handleClickDelete}>DEL</button>
          <button className='yellow' onClick={(e) => this.handleClickBtn(e)} value="+">
            +
          </button>
        </div>
        <div className="row4">
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={7}>
            7
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={8}>
            8
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={9}>
            9
          </button>
          <button className='yellow' onClick={(e) => this.handleClickBtn(e)} value="-">
            -
          </button>
        </div>
        <div className="row3">
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={4}>
            4
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={5}>
            5
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={6}>
            6
          </button>
          <button className='yellow' onClick={(e) => this.handleClickBtn(e)} value="/">
            /
          </button>
        </div>
        <div className="row2">
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={1}>
            1
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={2}>
            2
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value={3}>
            3
          </button>
          <button className='yellow' onClick={(e) => this.handleClickBtn(e)} value="*">
            *
          </button>
        </div>
        
        <div className="row5">
          <button className='grey long1' onClick={(e) => this.handleClickBtn(e)} value={0}>
            0
          </button>
          <button className='grey' onClick={(e) => this.handleClickBtn(e)} value=".">.</button>
          <button className='yellow' onClick={this.handleCalculate}>=</button>
        </div>
      </div>
    );
  }
}

export default Keys;
