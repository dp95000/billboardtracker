import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";


export default function HomePage() {

    const [viewport, setViewport] = useState({
        latitude: 39.9527237,
        longitude: -75.1635262,
        zoom: 10,
        width: '100vw',
        height: "100vh"
    })

    return (



        <div>
            <section id="content">

                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_BUILDBOARD}
                    mapStyle="mapbox://styles/ianclark226/ck9biyq6q02qp1jmg9t1ao42t"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
                >
                </ReactMapGL>

                <div className="container-fluid">
                    <div className="row">
                        <div className="columns medium-6 left-side">

                            {/* Demographics Data Output Table */}
                            <button id="demoBtn" type="button" className="button">Get Demographics</button>
                            <div className="demographics-table">

                                {/* Selected City */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Selected City:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p>Philadelphia</p>
                                    </div>
                                </div>

                                {/* Total Population */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Total Population:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="totPopVal"></span></p>
                                    </div>
                                </div>

                                {/* Total Male Population */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Total Male Population:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="totMalesVal"></span></p>
                                    </div>
                                </div>

                                {/* Total Female Population */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Total Female Population:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="totFemalesVal"></span></p>
                                    </div>
                                </div>

                                {/* Total Households */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Total Households:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="totHHVal"></span></p>
                                    </div>
                                </div>

                                {/* Median Household Income */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Median Household Income:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="medHincVal"></span></p>
                                    </div>
                                </div>

                                {/* Per Capita Income */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Per Capita Income:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="pciVal"></span></p>
                                    </div>
                                </div>

                                {/* Diversity Index */}
                                <div className="row">
                                    <div className="columns medium-6 cell-output">
                                        <strong><p>Diversity Index:</p></strong>
                                    </div>
                                    <div className="columns medium-6 cell-output">
                                        <p><span id="divIndxVal"></span></p>
                                    </div>
                                </div>

                            </div>
                            {/* End of Demographic Table Section */}
                        </div>
                        {/* End of Left Side Section */}

                        {/* Right Side Section */}
                        <div className="columns medium-6 right-side">
                            <h2>Our Custom Billboard Tracking System</h2>
                            <p>Use our Custom billboard Inventory Management system to view locations of our available billboard signs.  If you
                            are a business owner, click the button to the left to get detailed demographic information for the Philadelphia area and see which advertising markets are right for you.
                        </p>
                        </div>
                        {/* End of Right Side Section */}

                    </div>
                </div>

            </section>
        </div>
    )
}