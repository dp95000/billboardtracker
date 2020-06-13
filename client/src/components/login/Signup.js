import React from 'react';
import SignupFunction from '../loginfunction/SignupFunction';

export default function Signup() {
  return (
    <div>

      <section id="content">
        <div className="row">
          <div className="columns medium-12" id="login">
            <h2>Create an Account</h2>
            <form className="login" id="dashboard-form">
              <input type="text" className="form-control" id="name-input" placeholder="Name" />
              <input type="email" className="form-control" id="email-input" placeholder="Email" />
              <input type="password" className="form-control" id="password-input" placeholder="Password" />
              <button type="button" onClick={SignupFunction} id="sendform">Sign up</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}