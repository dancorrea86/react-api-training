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
          <input className="w-75 mx-auto m-3" name="" id="" type="text" />
        </div>
        <div className="conteiner-listas w-75 mx-auto m-3">
          <Tarefas />
        </div>
        <div>
            
        </div>
        <div className="conteiner-listas w-75 mx-auto m-3">
          <Concluidas/>
          <button className="btn btn-light">View</button>
        </div>
        <div>
            
        </div>
      </div>
    );
  }
}

export default App;
