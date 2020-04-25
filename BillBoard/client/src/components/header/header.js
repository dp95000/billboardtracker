import React from 'react';
//import Toggle from './toggle';


export default function Header() {
  return (<div>

    <header>
      <div className="row">
        <div className="columns small-6 medium-6">
          <div id="logo">
            <p>Billboard Tracking System</p>
          </div>
        </div>
        <div className="columns small-6 medium-6">
          <nav className="nav">

            <div className="hamburger-container">
              <ul className="hamburger">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <ul id="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
            </ul>

          </nav>
        </div>
      </div>

      {/*<Toggle></Toggle>*/}

    </header>

  </div>
  )
}