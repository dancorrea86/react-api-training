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
    axios.get(`http://localhost:5000/api`)
      .then(res => {
        console.log(res.data.public_repos)
        this.setState({ repos: res })
        console.log(this.state.repos)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  postUser = (e) => {
    e.preventDefault();
    const user = e.target.value
    axios.post(`http://localhost:5000/post`, user)
      .then(res => {
        console.log(res)
        this.setState({ repos: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">HTTP calls in React</h1>

        </header>

        <UserForm getUser={this.getUser} postUser={this.postUser} />

        <label>{this.state.repos ? `O numero de repositorios é ${this.state.repos}` : `Por favor, preencha um usuário válido`} </label>
          
      </div>
    );
  }
}

export default App;
