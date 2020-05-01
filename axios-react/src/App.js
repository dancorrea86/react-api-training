import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

//https://api.github.com/users/dancorrea86

import UserForm from "./components/UserForm"

class App extends Component {

  state = {
    repos: null
  }
  
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        //console.log(res.data.public_repos)
        this.setState({ repos: res.data.public_repos })
        console.log(this.state.repos)
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">HTTP calls in React</h1>

        </header>

        <UserForm getUser={this.getUser} />

        <label>{this.state.repos ? `O numero de repositorios é ${this.state.repos}` : `Por favor, preencha um usuário válido`} </label>
          
      </div>
    );
  }
}

export default App;
