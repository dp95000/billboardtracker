//mapbox

import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from './components/main/Main';

import './App.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 39.9527237,
    longitude: -75.1635262,
    zoom: 10,
    width: '100vw',
    height: "100vh"
  })

  return (
    <div>
      <Header></Header>



      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_BILLBOARD}
        mapStyle="mapbox://styles/ianclark226/ck9biyq6q02qp1jmg9t1ao42t"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>

      <Main></Main>
      <Footer></Footer>


    </div>
  )
}
