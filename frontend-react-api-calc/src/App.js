import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  state = { 
    count: 0,
    value: '',
    text: ''
  }

  // As funções não tem o contexto do THIS, é necessário criar um construtor ou fazer um ARROW Function para funcionar o This,
  // Sem isso o THIS fica como 'undefined'
  handleClick = () => {
    this.setState({ count: this.state.count + 1})
    this.postTextApiRes()
  }

  searchTextApiRes() {
    fetch('/api')
      .then(res => {return res.text()})
      .then(res => {console.log(res)})
  }

  postTextApiRes() {
    //console.log(this.state.text)
    axios.post('/post', this.state )
      .then(resp => {
        this.setState({ value: resp.data.value})
        console.log(resp.data.value)
      })
      
  }

  render() { 
    return ( 
      <div>
          <div className="form-row">
            <input type="number " className="form-control mt-5 m-3" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={(e) => this.setState({text: e.target.value})}></input>
          </div>
          <button className="btn btn-primary m-3" onClick={this.handleClick}>Submit</button>
        <div>
          <p className="m-3">{this.showCount()}</p>
          <p className="m-3">{this.state.value}</p>
          <p className="m-3">{this.state.text}</p>
        </div>
      </div>
     );
  }

  showCount() {
    let { count } = this.state;
    return count;
  }

  

}
 
export default App;