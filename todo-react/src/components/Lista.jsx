import React from 'react';

class Lista extends React.Component {
  state = {  }
  render() { 
    return ( 
      <ul>
        {this.props.value.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
 
export default Lista;