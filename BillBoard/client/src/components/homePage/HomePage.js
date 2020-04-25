import React from 'react';

export default function HomePage() {
    return(
        <div>
            <section id="content">
            {/* Map Section */}  
            <div class="container-fluid">
                <div class="row expanded">
                    <div class="columns medium-12 padfix">
                        <div id="map"></div>
                        <script src="billboardmap.js"></script>
                    </div>
                </div>
            </div>
            {/* End of Map Section */}

            <div class="container-fluid">
                <div class="row">
                    <div class="columns medium-6 left-side">
                        
                        {/* Demographics Data Output Table */}
                        <button id="demoBtn" type="button" class="button">Get Demographics</button>
                        <div class="demographics-table">

                            {/* Selected City */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Selected City:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p>Philadelphia</p>
                                </div>
                            </div>

                            {/* Total Population */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Total Population:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="totPopVal"></span></p>
                                </div>
                            </div>

                             {/* Total Male Population */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Total Male Population:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="totMalesVal"></span></p>
                                </div>
                            </div>

                             {/* Total Female Population */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Total Female Population:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="totFemalesVal"></span></p>
                                </div>
                            </div>

                            {/* Total Households */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Total Households:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="totHHVal"></span></p>
                                </div>
                            </div>

                            {/* Median Household Income */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Median Household Income:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="medHincVal"></span></p>
                                </div>
                            </div>

                            {/* Per Capita Income */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Per Capita Income:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="pciVal"></span></p>
                                </div>
                            </div>

                            {/* Diversity Index */}
                            <div class="row">
                                <div class="columns medium-6 cell-output">
                                    <strong><p>Diversity Index:</p></strong>
                                </div>
                                <div class="columns medium-6 cell-output">
                                    <p><span id="divIndxVal"></span></p>
                                </div>
                            </div>

                        </div>
                        {/* End of Demographic Table Section */}
                    </div>
                    {/* End of Left Side Section */}

                    {/* Right Side Section */}
                    <div class="columns medium-6 right-side">
                        <h2>Our Custom Billboard Tracking System</h2>
                        <p>Use our Custom billboard Inventory Management system to view locations of our available billboard signs.  If you
                            are a business owner, click the button to the left to get detailed demographic information for the Philadelphia area and see which advertising markets are right for you.
                        </p>
                    </div>
                    {/* End of Right Side Section */}

                </div>
            </div>

            </section>
        </div>
    )
}