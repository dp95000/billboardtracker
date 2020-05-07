import axios from "axios";
require("dotenv").config();
const { ApplicationSession } = require("@esri/arcgis-rest-auth");
const authentication = new ApplicationSession({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret
})



const url = `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${process.env.REACT_APP_ARCGIS_TOKEN}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[


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
}&dataCollections=["KeyGlobalFacts", "KeyUSFacts"]`


export default {
  auth: function () {
    return axios.get(url, {
      authentication
    })
  }
}
