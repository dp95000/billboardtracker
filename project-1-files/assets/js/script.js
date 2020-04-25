// Main Javascript File

$(document).ready(function(){

  function showTable(){
    $(".demographics-table").css("display", "block");
  };

  $("#demoBtn").on("click", function(event) {
    showTable();
    $("#demoBtn").css("display", "none");
  });
  
  //because we're limiting the MVP version to just Philly, we are hard coding Philly's latitude and longitude in the "geometry" in the URL below
  var settings = {
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?studyAreas=[
    {
      \"geometry\":{
        \"x\":-75.165222,
        \"y\":39.952583
      }
    }
  ]&studyAreasOptions={
    \"areaType\":\"RingBuffer\",
    \"bufferUnits\":\"esriMiles\",
    \"bufferRadii\":[1]
  }&dataCollections=[\"KeyGlobalFacts\", \"KeyUSFacts\"]",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    }`,
    "data": {
      "f": "json",
      "token": "PTBqpIfvU64VAWbjQO-ihRwr1G1RvevTEIe5o_KemfJJAc-gtLZOTGecAMYzXnzsyuV_DuidjHlNXZ6ZHhXXVR0Uki0ne2YopdmfrlkSuNDapvNtH_wy0blmIFdDDhQ0sneyfgg2zwYRysEZSUdAvg..",
      "inSR": "4326",
      "outSR": "4326",
      "returnGeometry": "true"
    }
  };
  
    $.ajax(settings).done(function(response) {
      console.log(JSON.parse(response));
    
      $("#totPopVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
      $("#totMalesVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
      $("#totFemalesVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
      $("#totHHVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
      $("#medHincVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
      $("#pciVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
      $("#divIndxVal").prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);
    
    
    });
  }); //closes document.ready
  
  
    
/*DEV NOTES====================================================

DATA POINTS PULLED FROM API:
  
  FIELD NAME AND ID:
  Total Population  id="totPop"
  Total Male Population  id="totMales"
  Total Female Population  id="totFemales"
  2019 Total Households  id="totHH"
  2019 Median Household Income  id="medHinc"
  2019 Per Capita Income  id="pci"
  2019 Diversity Index id="divIndx"
  
  DATA VALUE AND ID:
  Total Population  id="totPopVal"
  Total Male Population  id="totMalesVal"
  Total Female Population  id="totFemalesVal"
  2019 Total Households  id="totHHVal"
  2019 Median Household Income  id="medHincVal"
  2019 Per Capita Income  id="pciVal"
  2019 Diversity Index id="divIndxVal"


  NOTES FOR FUTURE DEV:
  - implement a demographics solution that doesn't require refreshing your token every 2 hours

==============================================================*/