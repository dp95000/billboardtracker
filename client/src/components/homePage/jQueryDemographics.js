import $ from "jquery";

var settings = {
  "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${process.env.REACT_APP_ARCGIS_TOKEN}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
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
}

export default function getDemographics() {
  $.ajax(settings).done(function (response) {
    console.log(JSON.parse(response));
    console.log(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
    $("#totPopVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
    $("#totMalesVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
    $("#totFemalesVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
    $("#totHHVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
    $("#medHincVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
    $("#pciVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
    $("#divIndxVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);
    $("#demoBtn").css("display", "none");
  });
  $(".demographics-table").css("display", "block");
};






