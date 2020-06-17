import React from 'react';
import LoginFunction from '../loginfunction/LoginFunction';

export default function Login() {
    return (
        <div>

            <section id="content">
                <div className="row">
                    <div className="columns medium-12" id="login">
                        <h2>Dashboard Login</h2>
                        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                        <form className="login" id="dashboard-form">
                            <input type="email" className="form-control" id="email-input" placeholder="Email" />
                            <input type="password" className="form-control" id="password-input" placeholder="Password" />
                            <button type="button" onClick={LoginFunction} id="sendform">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}