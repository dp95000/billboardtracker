import React from 'react';
<<<<<<< HEAD
import ReactMapGL, {Marker} from "react-map-gl";
=======
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

>>>>>>> be6c375d99e871c4cbee5eab4c44c10c73171054

export default function HomePage() {


    return (

        <div>
            <div style={{ width: "100vw", height: "100vh" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_GOOGLE_KEY
                        }`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="columns medium-6 left-side">

                        <UserInputs />

                        {/* Demographics Data Output Table */}


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