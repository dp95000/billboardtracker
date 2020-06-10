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

                    {/* Left Side Section */}
                    <div className="columns medium-6 left-side">
                        <h2>Our Custom Billboard Tracking System</h2>
                        <p>Welcome to our custom billboard inventory management system! Please use the GoogleMap markers to view locations of available billboard signs. Click on
                        the markers to see information about the selected billboard, and use the demographics buttons below the map
                        to get detailed information about the Tri-State area to see which advertising markets are right for you.
                        </p>
                    </div>
                    {/* End of Left Side Section */}


                    {/* Right Side Section */}
                    <div className="columns medium-6 right-side">

                        <UserInputs />

                        <table className="demographics-table">
                            <tbody>
                                <tr>
                                    <th>Location</th>
                                    <th id="cityName"></th>
                                </tr>
                                <tr>
                                    <td>Total Population</td>
                                    <td id="totPopVal"></td>
                                </tr>
                                <tr>
                                    <td>Total Male Population</td>
                                    <td id="totMalesVal"></td>
                                </tr>
                                <tr>
                                    <td>Total Female Population</td>
                                    <td id="totFemalesVal"></td>
                                </tr>
                                <tr>
                                    <td>Total Daytime Population (residents and workers)</td>
                                    <td id="dayPopVal"></td>
                                </tr>
                                <tr>
                                    <td>Annual Projected Population Growth 5 years</td>
                                    <td id="projPopGrowthVal"></td>
                                </tr>
                                <tr>
                                    <td>Total Housing Units</td>
                                    <td id="totHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Total Projected Housing Units 5 years</td>
                                    <td id="totProjHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Owner Occupied Housing Units</td>
                                    <td id="OOHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Projected Owner Occupied Housing Units 5 years</td>
                                    <td id="projOOHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Renter Occupied Housing Units</td>
                                    <td id="ROHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Projected Renter Occupied Housing Units 5 years</td>
                                    <td id="projROHUVal"></td>
                                </tr>
                                <tr>
                                    <td>Median Home Value</td>
                                    <td id="medHomeVal"></td>
                                </tr>
                                <tr>
                                    <td>Projected Median Home Value 5 years</td>
                                    <td id="projMedHomeVal"></td>
                                </tr>
                                <tr>
                                    <td>Median Household Income</td>
                                    <td id="medHincVal"></td>
                                </tr>
                                <tr>
                                    <td>Annual Projected Median Household Income 5 years</td>
                                    <td id="projMedHincVal"></td>
                                </tr>
                                <tr>
                                    <td>Per Capita Income</td>
                                    <td id="pciVal"></td>
                                </tr>
                                <tr>
                                    <td>Projected Per Capita Income 5 years</td>
                                    <td id="projPciVal"></td>
                                </tr>
                                <tr>
                                    <td>Diversity Index</td>
                                    <td id="divIndxVal"></td>
                                </tr>
                                <tr>
                                    <td colspan="2"><em>(Demographics data source: arcGIS)</em></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    {/* End of Right Side Section */}

                </div>
            </div>
        </div>



    )
}