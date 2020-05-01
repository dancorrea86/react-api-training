import React from 'react';

const UserForm = (props) => {
  return (

    <form className="form-group mb-2" onSubmit={props.getUser}>
        <input className="cform-control-plaintext m-2" type="text" 
        name="username"/>
        <button className="btn btn-primary">Submit</button>
    </form>

  );
}
 
export default UserForm;