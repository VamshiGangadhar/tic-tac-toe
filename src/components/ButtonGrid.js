import React, { Component } from 'react';
import styled from 'styled-components';

class ButtonGrid extends Component {
  handleClick(i) {
    console.log(i);
  }

  render() {
    const buttons = ["X", 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <Div>
        {buttons.map((button, i) => (
          <button key={i} onClick={() => this.handleClick(i)}>
            {button}
          </button>
        ))}
      </Div>
    );
  }
}

const Div = styled.div`
  width : 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default ButtonGrid;
