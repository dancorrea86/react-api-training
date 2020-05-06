import React, { Component } from 'react';
import Tarefas from "./components/Tarefas";
import Concluidas from "./components/Concluidas";
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    tarefas: ''
  }

  getList = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/tarefas`)
      .then(res => {
        console.log(res.data)
        this.setState({tarefas: res.data})
      })
  }

  renderList = () => {
    const lista = this.state.tarefas
    const listItens = lista.map((itens) =>
      <li key={itens}>{itens}</li>
    )
    return (
      <div>
        {listItens}
      </div>
    )
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
            {this.renderList}
        </div>
        <div className="conteiner-lists w-75 mx-auto m-3">
          <Concluidas/>
          <button className="btn btn-light" onClick={this.getList}>View</button>
        </div>
        <div>
            
        </div>
      </div>
    );
  }
}

export default App;
