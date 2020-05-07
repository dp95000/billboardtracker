import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import UserInputs from "../demographics/UserInputs";




function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 39.952583, lng: -75.165222 }}
        />
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
                                    <strong><p>City:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p id="cityName"></p>
                                </div>
                            </div >

                            {/* Total Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Population:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totPopVal"></span></p>
                                </div>
                            </div >

                            {/* Total Male Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Male Population:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totMalesVal"></span></p>
                                </div>
                            </div >

                            {/* Total Female Population */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Female Population:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totFemalesVal"></span></p>
                                </div>
                            </div >

                            {/* Total Households */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Total Households:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="totHHVal"></span></p>
                                </div>
                            </div >

                            {/* Median Household Income */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Median Household Income:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="medHincVal"></span></p>
                                </div>
                            </div >

                            {/* Per Capita Income */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Per Capita Income:</p></strong>
                                </div>
                                <div className="columns medium-6 cell-output">
                                    <p><span id="pciVal"></span></p>
                                </div>
                            </div >

                            {/* Diversity Index */}
                            < div className="row" >
                                <div className="columns medium-6 cell-output">
                                    <strong><p>Diversity Index:</p></strong>
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
                        <p>Use our Custom billboard Inventory Management system to view locations of our available billboard signs.  If you
                        are a business owner, click the button to the left to get detailed demographic information for the Philadelphia area and see which advertising markets are right for you.
                        </p>
                    </div>
                    {/* End of Right Side Section */}

                </div>
            </div>
        </div>



    )
}