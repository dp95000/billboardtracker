import React from "react";
import { getDemographics } from "./Demographics";

export default function () {
  return (
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
  )
}