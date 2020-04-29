import React from 'react';

export default function Dashboard() {
    return(
        <div>
            
            <section id="content dashboard">
                
                {/* Banner */}
                <div className="container">
                    
                        <div className="columns medium-12" id="banner">
                            <h1>Dashboard Login</h1>
                        </div>
                    
                </div>

                <div className="row" id="dual-col">
                    {/* Billboard Locations */}
                    <div className="columns small-12 medium-12 large-6" id="sec1">
                        <h2>Billboard Locations</h2>

                        {/* Billboard Wrap*/}
                        <div className="billboard_wrap">
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                        </div>

                        {/* Billboard Save & Update Form */}
                        <form id="dashboard-form">
                            <div className="container">
                                {/* Lat */}
                                <div class="columns small-12 medium-6 label">Coordinates - Lat:</div>
                                <div class="columns small-12 medium-6"><input id="lat" type="text" /></div>
                                
                                {/* Lon */}
                                <div class="columns small-12 medium-6 label">Coordinates - Lon:</div>
                                <div class="columns small-12 medium-6"><input id="lon" type="text" /></div>

                                {/* Location */}
                                <div class="columns small-12 medium-6 label">Location:</div>
                                <div class="columns small-12 medium-6"><input id="location" type="text" /></div>

                                {/* Size */}
                                <div class="columns small-12 medium-6 label">Size:</div>
                                <div class="columns small-12 medium-6"><input id="size" type="text" /></div>

                                {/* Type */}
                                <div class="columns small-12 medium-6 label">Type:</div>
                                <div class="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="Static">Static</option>
                                        <option value="Digital">Digital</option>
                                    </select>    
                                </div>

                                {/* Available ? */}
                                <div class="columns small-12 medium-6 label">Available:</div>
                                <div class="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>    
                                </div>

                                {/* Number of Sides */}
                                <div class="columns small-12 medium-6 label">No. Of Sides:</div>
                                <div class="columns small-12 medium-6">
                                    <select id="type">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>    
                                </div>

                                {/* Sign ID Number */}
                                <div class="columns small-12 medium-6 label">Sign ID Number:</div>
                                <div class="columns small-12 medium-6"><input id="sign_id" type="text" /></div>

                            </div>
                            <p>&nbsp;</p>
                            <button type="submit" class="btn btn-default" id="sendform">Save</button>
                        </form>

                    </div>
                    {/* Clients */}
                    <div className="columns small-12 medium-12 large-6" id="sec2">
                        <h2>Clients</h2>
                        
                         {/* Clients Wrap*/}
                        <div className="client_wrap">
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><buton className="edit">Edit</buton><buton className="delete">Delete</buton>
                            </div>
                        </div>

                        {/* Clients Form */}
                        <form id="dashboard-form">
                            <div className="container">

                                {/* First Name */}
                                <div class="columns small-12 medium-6 label">First Name:</div>
                                <div class="columns small-12 medium-6"><input id="fname" type="text" /></div>

                                {/* Last Name */}
                                <div class="columns small-12 medium-6 label">Last Name:</div>
                                <div class="columns small-12 medium-6"><input id="lname" type="text" /></div>

                                {/* Business Name */}
                                <div class="columns small-12 medium-6 label">Business Name:</div>
                                <div class="columns small-12 medium-6"><input id="business_name" type="text" /></div>

                                {/* Address */}
                                <div class="columns small-12 medium-6 label">Billing Address:</div>
                                <div class="columns small-12 medium-6"><input id="address" type="text" /></div>

                                {/* Address */}
                                <div class="columns small-12 medium-6 label">Phone:</div>
                                <div class="columns small-12 medium-6"><input id="phone" type="tel" /></div>

                                {/* Business Name */}
                                <div class="columns small-12 medium-6 label">Signs Currently Rented<br></br> - Enter Sign IDs:</div>
                                <div class="columns small-12 medium-6"><input id="business_name" type="text" /></div>
                                
                                {/* Business Name */}
                                <div class="columns small-12 medium-6 label">Contact Term:</div>
                                <div class="columns small-12 medium-6"><input id="contract_term" type="text" /></div>

                                {/* Rent */}
                                <div class="columns small-12 medium-6 label">Total Monthly Rent:</div>
                                <div class="columns small-12 medium-6"><input id="renu" type="number" min="0" /></div>
                            </div>

                            <p>&nbsp;</p>
                            <button type="submit" class="btn btn-default" id="sendform">Save</button>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}