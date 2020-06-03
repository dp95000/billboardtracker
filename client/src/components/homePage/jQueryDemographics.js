import $ from "jquery";

function scrollToTable() {
  window.scrollTo(246, 622);
}

export function getDemographicsPhilly() {
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
  $.ajax(settings).done(function (response) {
    console.log(JSON.parse(response));
    $("#cityName").empty().text("Philadelphia, PA");
    $("#totPopVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
    $("#totMalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
    $("#totFemalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
    $("#totHHVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
    $("#medHincVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
    $("#pciVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
    $("#divIndxVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);
  });
  $(".demographics-table").css("display", "block");
  scrollToTable();
};


export function getDemographicsWilmington() {
  var settings = {
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${process.env.REACT_APP_ARCGIS_TOKEN}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
              {
                "geometry":{
                  "x": -75.546667,
                  "y": 39.745833
                }
              }
            ]&studyAreasOptions={
              "areaType":"RingBuffer",
              "bufferUnits":"esriMiles",
              "bufferRadii":[1]
            }&dataCollections=["KeyGlobalFacts", "KeyUSFacts"]`
  }
  $.ajax(settings).done(function (response) {
    console.log(JSON.parse(response));
    $("#cityName").empty().text("Wilmington, DE");
    $("#totPopVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
    $("#totMalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
    $("#totFemalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
    $("#totHHVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
    $("#medHincVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
    $("#pciVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
    $("#divIndxVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);
  });
  $(".demographics-table").css("display", "block");
  scrollToTable();
};

export function getDemographicsTrenton() {
  var settings = {
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?f=json&token=${process.env.REACT_APP_ARCGIS_TOKEN}&inSR=4326&outSR=4326&returnGeometry=true&studyAreas=[
              {
                "geometry":{
                  "x": -74.764001,
                  "y": 40.223748
                }
              }
            ]&studyAreasOptions={
              "areaType":"RingBuffer",
              "bufferUnits":"esriMiles",
              "bufferRadii":[1]
            }&dataCollections=["KeyGlobalFacts", "KeyUSFacts"]`
  }
  $.ajax(settings).done(function (response) {
    console.log(JSON.parse(response));
    $("#cityName").empty().text("Trenton, NJ");
    $("#totPopVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
    $("#totMalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
    $("#totFemalesVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
    $("#totHHVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
    $("#medHincVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
    $("#pciVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
    $("#divIndxVal").empty().text(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);
  });
  $(".demographics-table").css("display", "block");
  scrollToTable();
};



