import React from 'react';
//import Toggle from './toggle';


export default function Header() {
    return(<div>

<header>     
<div class="row">
    <div class="columns small-6 medium-6">
      <div id="logo">
          <p>Billboard Tracking System</p>
      </div>
    </div>
      <div class="columns small-6 medium-6">
        <nav class="nav">

          <div class="hamburger-container">
            <ul class="hamburger">
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