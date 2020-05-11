import React, { Component } from 'react';
import Tarefas from "./components/Tarefas";
import Concluidas from "./components/Concluidas";
import Listas from "./components/Lista"
import axios from 'axios'
import './App.css';

class RenderList extends React.Component {

  render() {
    console.log(this.props.values)
    const listItens = this.props.values.map((itens => 
      <li key={itens.id}>{itens.name}</li>))
    console.log(listItens)
    return (
      <ul>
          {listItens}
      </ul>
    )
  }
}

class App extends Component {

  state = {
    tarefas: []
  }

  getList = (e) => {
    e.preventDefault();
    axios.get(`/tarefas`)
      .then(res => {
        //console.log(res.data)
        this.setState({tarefas: res.data})
      })
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
