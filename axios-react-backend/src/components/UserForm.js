import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      <form className="form-group mb-2" onSubmit={props.getUser}>
          <input className="cform-control-plaintext m-2" type="text" 
          name="username"/>
          <button className="btn btn-primary m-2">Submit</button>
      </form>

      <form className="form-group mb-2" onSubmit={props.postUser}>
        <input className="cform-control-plaintext m-2" type="text" 
        name="userpost"/>
        <button className="btn btn-primary m-2">post</button>
      </form>
    </div>
  );
}
 
export default UserForm;