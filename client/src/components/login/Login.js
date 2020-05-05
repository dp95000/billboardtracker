import React from 'react';
// import LoginFunction from '../loginfuction/LoginFunction';
var passport = require("passport");

export default function Login() {
    return(
        <div>

            <section id="content">
                <div className="row">
                    <div className="columns medium-12" id="login">
                    <h2>Dashboard Login</h2>
                        <br />
                        <form className="login" id="dashboard-form">
                            <input type="email" className="form-control"  id="email-input" placeholder="Email" />
                            <input type="password" className="form-control" id="password-input" placeholder="Password" />
                            <button type="submit" /* onClick={LoginFunction} */ id="sendform">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}