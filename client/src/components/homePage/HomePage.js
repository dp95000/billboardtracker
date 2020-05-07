import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import UserInputs from "../demographics/UserInputs";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 39.952583, lng: -75.165222 }}
        >
            <Marker position={{ lat: 39.947475, lng: -75.117828 }}
            />
            <Marker position=
                {{ lat: 39.948934, lng: -75.119765 }}
            />
            <Marker position=
                {{ lat: 39.946107, lng: -75.111171 }}
            />
            <Marker position=
                {{ lat: 39.948934, lng: -75.119765 }}
            />
            <Marker position=
                {{ lat: 39.945966, lng: -75.109798 }}
            />
            <Marker position=
                {{ lat: 39.945142, lng: -75.107525 }}
            />
            <Marker position=
                {{ lat: 39.954656, lng: -75.143354 }}
            />
            <Marker position=
                {{ lat: 39.954013, lng: -75.142501 }}
            />
            <Marker position=
                {{ lat: 39.913734, lng: -75.181454 }}
            />
            <Marker position=
                {{ lat: 39.720190, lng: -75.539064 }}
            />
            <Marker position=
                {{ lat: 39.739187, lng: -75.562125 }}
            />
            <Marker position=
                {{ lat: 39.680814, lng: -75.591125 }}
            />
            <Marker position=
                {{ lat: 40.212427, lng: -74.703457 }}
            />
            <Marker position=
                {{ lat: 40.216930, lng: -74.755357 }}
            />
            <Marker position=
                {{ lat: 40.224462, lng: -74.758685 }}
            />
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));




export default function HomePage() {


    return (

        <div>
            <div className="map_contain">
                <div style={{ /*width: "100vw", */ height: "60vh" }}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                            process.env.REACT_APP_GOOGLE_KEY
                            }`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                    />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="columns medium-6 left-side">

                        <UserInputs />

                        {/* Demographics Data Output Table */}
                        < div className="demographics-table" >

                            {/* Selected City */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Location</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p id="cityName"></p>
                                </div>
                            </div >

                            {/* Total Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Population</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totPopVal"></span></p>
                                </div>
                            </div >

                            {/* Total Male Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Male Population</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totMalesVal"></span></p>
                                </div>
                            </div >

                            {/* Total Female Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Female Population</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totFemalesVal"></span></p>
                                </div>
                            </div >

                            {/* Total Households */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Households</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totHHVal"></span></p>
                                </div>
                            </div >

                            {/* Median Household Income */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Median Household Income</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="medHincVal"></span></p>
                                </div>
                            </div >

                            {/* Per Capita Income */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Per Capita Income</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="pciVal"></span></p>
                                </div>
                            </div >

                            {/* Diversity Index */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Diversity Index</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="divIndxVal"></span></p>
                                </div>
                            </div >

                        </div >

                        {/* End of Demographic Table Section */}
                    </div>
                    {/* End of Left Side Section */}

                    {/* Right Side Section */}
                    <div className="columns medium-6 right-side">
                        <h2>Our Custom Billboard Tracking System</h2>
                        <p>Welcome to our custom billboard inventory management system! Please use the GoogleMap markers to view locations of available billboard signs. Click on
                        the markers to see information about the selected billboard, and use the demographics buttons below the map
                        to get detailed information about the Tri-State area to see which advertising markets are right for you.
                        </p>
                    </div>
                    {/* End of Right Side Section */}

                </div>
            </div>
        </div>



    )
}