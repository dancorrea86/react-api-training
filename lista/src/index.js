import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Board extends React.Component {
  constructor(props) {
    super(props);
      this.state = 
      [ 
        {"id": 1, "tarefas": "Tarefa 1"},
        {"id": 2, "tarefas": "Tarefa 1"},
        {"id": 3, "tarefas": "Tarefa 1"},
        {"id": 4, "tarefas": "Tarefa 1"}
      ]
  }

  renderLista() {
    const valores = this.state((itens) => 
      <ul>
        <li id={valores.id}>{valores.tarefas}</li>
      </ul>)
  }
  render() {
    return (
      <div>
        <button>Button</button>
        {this.renderLista}
      </div>
      
    )
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
)