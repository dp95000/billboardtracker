import React from 'react';

function close_modal(){
    var close_modal = document.getElementById("billboard_modal");
    close_modal.style.display = "none";
}

export default function billboardForm() {
    return(
        <div>
             {/* Billboard Modal Form*/}
             <div id="billboard_modal" className="modal">
             <div className="modal-content">
             <span id="close_btn" onClick={close_modal} className="close">&times;</span>
                <h1>Add and Edit Billboard Locations</h1>

                        {/* Billboard Save & Update Form */}
                        <form id="dashboard-form">
                            <div className="container">
                                {/* Lat */}
                                <div className="columns small-12 medium-6 label">Coordinates - Lat:</div>
                                <div className="columns small-12 medium-6"><input id="lat" type="text" /></div>
                                
                                {/* Lon */}
                                <div className="columns small-12 medium-6 label">Coordinates - Lon:</div>
                                <div className="columns small-12 medium-6"><input id="lon" type="text" /></div>

                                {/* Location */}
                                <div className="columns small-12 medium-6 label">Location:</div>
                                <div className="columns small-12 medium-6"><input id="location" type="text" /></div>

                                {/* Size */}
                                <div className="columns small-12 medium-6 label">Size:</div>
                                <div className="columns small-12 medium-6"><input id="size" type="text" /></div>

                                {/* Type */}
                                <div className="columns small-12 medium-6 label">Type:</div>
                                <div className="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="Static">Static</option>
                                        <option value="Digital">Digital</option>
                                    </select>    
                                </div>

                                {/* Available ? */}
                                <div className="columns small-12 medium-6 label">Available:</div>
                                <div className="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>    
                                </div>

                                {/* Number of Sides */}
                                <div className="columns small-12 medium-6 label">No. Of Sides:</div>
                                <div className="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>    
                                </div>

                                {/* Sign ID Number */}
                                <div className="columns small-12 medium-6 label">Sign ID Number:</div>
                                <div className="columns small-12 medium-6"><input id="sign_id" type="text" /></div>

                            </div>
                            <p>&nbsp;</p>
                            <button type="submit" className="btn btn-default" id="sendform">Save</button>
                        </form>
                            
                </div>
            </div>
        </div>
    )
}