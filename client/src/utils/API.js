import axios from "axios";
require("dotenv").config();
const { ApplicationSession } = require("@esri/arcgis-rest-auth");
require("dotenv").config();
const authentication = new ApplicationSession({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret
})


const url = `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=SudVz3N16M4Ab98h1Bl1cqtlsqSq1s7AgxS0EqZUVCIPf8U5ZwVp7ieZfQZe-CjHctqNznw5F0FG0z49nqJh3FlqCGMm-oKKvOSfGf9u-95lKgHNzDHnl5hI4bK-qOHhWVphbxcXBwx4_lCgup1kDQ..&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
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
