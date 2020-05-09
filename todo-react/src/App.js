import React, { Component } from 'react';
import Tarefas from "./components/Tarefas";
import Concluidas from "./components/Concluidas";
import Listas from "./components/Lista"
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    tarefas: []
  }

  getList = (e) => {
    e.preventDefault();
    axios.get(`/tarefas`)
      .then(res => {
        console.log(res.data)
        this.setState({tarefas: res.data})
      })
  }

  getTarefas = () => {
    console.log(this.state.tarefas)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODO LIST PROJECT</h2>
        </div>
        <div>
          <input className="w-75 mx-auto m-3" name="" id="" type="text" />
        </div>
        <div className="conteiner-lists w-75 mx-auto m-3">
          <Tarefas />
        </div>
        <div>
            <Listas value={this.state.tarefas} />
        </div>
        <div className="conteiner-lists w-75 mx-auto m-3">
          <Concluidas/>
          <button className="btn btn-light" onClick={this.getList}>View</button>
          <button className="btn btn-light" onClick={this.getTarefas}>Viwe Tarefas</button>
        </div>
        <div>
            
        </div>
      </div>
    );
  }
}



export default App;
