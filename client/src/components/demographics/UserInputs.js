import React from "react";
import { getDemographicsPhilly, getDemographicsWilmington, getDemographicsTrenton } from "../homePage/jQueryDemographics";

export default function () {
  return (
    <div>
      <p><em>We have demographic data for three cities, and we're always expanding!</em></p>

      <div className="form-check">
        <label className="" htmlFor="defaultCheck1">Philadelphia, PA</label>
        <button className="button" type="checkbox" value="" id="defaultCheck1" onClick={getDemographicsPhilly}>Get Demographics</button>
      </div>

      <div className="form-check">
        <label className="" htmlFor="defaultCheck1">Wilmington, DE</label>
        <button className="button" type="checkbox" value="" id="defaultCheck1" onClick={getDemographicsWilmington}>Get Demographics</button>
      </div>

      <div className="form-check">
        <label className="" htmlFor="defaultCheck1">Trenton, NJ</label>
        <button className="button" type="checkbox" value="" id="defaultCheck1" onClick={getDemographicsTrenton}>Get Demographics</button>
      </div>
      {/* <button id="demoBtn" type="button" className="button" onClick={getDemographics}>Get Demographics</button> */}
    </div>
  )
}