import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import UserInputs from "../demographics/UserInputs";
import Demographics from "../demographics/Demographics";
import axios from "axios";
require("dotenv").config();
const { ApplicationSession } = require("@esri/arcgis-rest-auth");
const authentication = new ApplicationSession({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret
})




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

    const [demog, setDemog] = useState(null);
    const getDemographics = async () => {
        const response = await axios.get(`https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${process.env.ARCGIS_TOKEN}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
            {
              "geometry":{
           "x": -75.165222,
            "y": 39.952583
              }
            }
          ]&studyAreasOptions={
            "areaType":"RingBuffer",
            "bufferUnits":"esriMiles",
            "bufferRadii":[1]
          }&dataCollections=["KeyGlobalFacts", "KeyUSFacts"]`, authentication);
        setDemog(response.data);
    };


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
                        <div>
                            <p>Choose up to three cities for your demographics search</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">Philadelphia, PA</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">Wilmington, DE</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">Trenton, NJ</label>
                            </div>
                            <button id="demoBtn" type="button" className="button" onClick={getDemographics}>Get Demographics</button>
                        </div>

                        {/* Demographics Data Output Table */}
                        <div className="demogOutput">
                            {demog &&
                                demog.map((data) => {
                                    return (
                                        <div className="output">
                                            <h2>{}</h2>
                                )
                            })}
                                        </div>

                        {/* End of Demographic Table Section */ }
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