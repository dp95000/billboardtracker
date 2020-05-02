//mapbox

import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from './components/main/Main';

import './App.css';
require('dotenv').config()

export default function App() {

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

    </div>
  )
}
