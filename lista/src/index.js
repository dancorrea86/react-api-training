import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  render() {
    return (
      <button>Button</button>
    )
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
)