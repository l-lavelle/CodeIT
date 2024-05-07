import React, { useState } from "react";
import '../../Variables.css'
import './Login.css'
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [switched, setSwitched] = useState(false);

  const fadeOut=()=>{
    setSwitched(true)
  }

  return (
<main>
  <div className="p-3 signup-login-container">
    <div className={switched===true? "hidden ":"visible login-container"}>
    <h2>Login</h2>
     <Form>
      <Form.Group className="mb-3 text-left signup-login-text" controlId="formBasic">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3 text-left signup-login-text" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
    </Form>
    </div>
    <div className={switched===true? "hidden":"visible login-switch-container"}>
     <button variant="primary" type="button" onClick={fadeOut}>
            Sign Up switch
     </button>
    </div>


  <div className={switched===true? "visible":"hidden"}>
    <h2>Sign Up</h2>
         <Form>
          <Form.Group className="mb-3 text-left signup-login-text" controlId="formBasic">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3 text-left signup-login-text" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3 text-left signup-login-text" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
          </Form.Group>

          <button variant="primary" type="button" onClick={()=>setSwitched(false)}>
            Sign Up
          </button>
        </Form>
    </div>
   </div>
</main>
  );
};

export default Login;