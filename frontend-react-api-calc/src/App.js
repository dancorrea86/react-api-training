import React, { Component } from 'react';

class App extends Component {
  state = { 
    count: 0
  }

  // As funções não tem o contexto do THIS, é necessário criar um construtor ou fazer um ARROW Function para funcionar o This,
  // Sem isso o THIS fica como 'undefined'
  formatCount = () => {
    this.setState({ count: this.setState.count + 1})
  }

  render() { 
    return ( 
      <div>
          <div className="form-row">
            <input type="number " className="form-control mt-5 m-3" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          </div>
          <button className="btn btn-primary m-3" onClick={this.formatCount}>Submit</button>
        <div>
          <p className="m-3">{this.state.count}</p>
        </div>
      </div>
     );
  }


}
 
export default App;