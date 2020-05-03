import React, { Component } from 'react';
import Tarefas from "./components/Tarefas";
import Concluidas from "./components/Concluidas";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODO LIST PROJECT</h2>
        </div>
        <div>
          <input name="" id="" className="form-control m-5 w-50 d-inline" type="text" />
        </div>
        <div>
          <Tarefas />
        </div>
        <div>
          <Concluidas />
        </div>
      </div>
    );
  }
}

export default App;
