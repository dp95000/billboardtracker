import axios from "axios";
require("dotenv").config();
const { ApplicationSession } = require("@esri/arcgis-rest-auth");
const authentication = new ApplicationSession({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret
})

const url = `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=hDjrQ0XMnsEaMOK3jHMnJEj7Z_-gPJKdPF7eWFoVTcueAE7MOBQWqPS0-mk5D2oq23uZgDsOxV45Zqdc3h-rx_xprkdFgyTcI6zbcZaTVOsF69GYOP6-6aKE3tF2609bfzI82iYwpHWEVcBvcbLt8w..&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
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
