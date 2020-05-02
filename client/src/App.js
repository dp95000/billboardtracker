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
<<<<<<< HEAD



      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_BILLBOARD}
        // mapStyle="mapbox://styles/ianclark226/ck9biyq6q02qp1jmg9t1ao42t"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>

=======
>>>>>>> be6c375d99e871c4cbee5eab4c44c10c73171054
      <Main></Main>
      <Footer></Footer>

    </div>
  )
}
