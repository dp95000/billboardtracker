import React from 'react';

export default function Login() {
    return(
        <div>
            <section id="content">
                <div className="row">
                    <div className="columns medium-12" id="login">
                    <h2>Dashboard Login</h2>
                        <br />
                        <form id="dashboard-form">
                            <input id="senderName" class="form-control" type="text" placeholder="Username" />
                            <input type="password" class="form-control" id="password-input" placeholder="Password" />
                            <button type="button" id="sendform">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}