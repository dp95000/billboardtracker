import React from "react";

export default function () {
  return (
    <div>
      <p>Choose up to three cities for your demographics search</p>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">Philadelphia, PA</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">Wilmington, DE</label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">Trenton, NJ</label>
      </div>
      <button id="demoBtn" type="button" className="button">Get Demographics</button>
    </div>
  )
}