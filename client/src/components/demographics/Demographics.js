
const totPop = document.getElementById("totPopVal");
const totMales = document.getElementById("totMalesVal");
const totFemales = document.getElementById("totFemalesVal");
const totHH = document.getElementById("totHHVal");
const medHinc = document.getElementById("medHincVal");
const pci = document.getElementById("pciVal");
const divIndx = document.getElementById("divIndxVal");



function showTable() {
  document.getElementsByClassName("demographics-table").css("display", "block");
};

document.getElementById("demoBtn").on("click", function (event) {

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementsByClassName("demographics-table").innerHTML = this.responseText;
    }
  };

  xhttp.open("POST", `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?studyAreas=[
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
    }`, true);
  xhttp.send();
  showTable();
  document.getElementById("demoBtn").css("display", "none");
});

{/*because in version 1 we're limiting the MVP version to just Philly, we are hard coding Philly's latitude and longitude in the "geometry" in the URL below*/ }
const settings = {
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

$.ajax(settings).done(function (response) {
  console.log(JSON.parse(response));

  totPop.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTPOP_CY);
  totMales.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTMALES);
  totFemales.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTFEMALES);
  totHH.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.TOTHH_CY);
  medHinc.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.MEDHINC_CY);
  pci.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.PCI_CY);
  divIndx.prepend(JSON.parse(response).results[0].value.FeatureSet[0].features[0].attributes.DIVINDX_CY);


});


{/*DEMOGRAPHICS TABLE*/ }
<div className="demographics-table">

  {/* Selected City */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Selected City:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p>Philadelphia</p>
    </div>
  </div>

  {/* Total Population */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Total Population:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="totPopVal"></span></p>
    </div>
  </div>

  {/* Total Male Population */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Total Male Population:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="totMalesVal"></span></p>
    </div>
  </div>

  {/* Total Female Population */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Total Female Population:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="totFemalesVal"></span></p>
    </div>
  </div>

  {/* Total Households */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Total Households:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="totHHVal"></span></p>
    </div>
  </div>

  {/* Median Household Income */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Median Household Income:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="medHincVal"></span></p>
    </div>
  </div>

  {/* Per Capita Income */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Per Capita Income:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="pciVal"></span></p>
    </div>
  </div>

  {/* Diversity Index */}
  <div className="row">
    <div className="columns medium-6 cell-output">
      <strong><p>Diversity Index:</p></strong>
    </div>
    <div className="columns medium-6 cell-output">
      <p><span id="divIndxVal"></span></p>
    </div>
  </div>

</div>