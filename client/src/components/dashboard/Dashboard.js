import React from 'react';
import BillboardForm from './BillboardForm';

function modal(){
    var modal = document.getElementById("billboard_modal");
    modal.style.display = "block";
}

function close_modal(){
    var close_modal = document.getElementById("billboard_modal");
    close_modal.style.display = "none";
}

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
                        <BillboardForm></BillboardForm>
                        
                        {/* Billboard Wrap*/}
                        <div className="billboard_wrap">
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button className="edit" data-open="BBmodal">Edit</button><button className="delete">Delete</button>
                            </div>
                        </div>

                    </div>
                    {/* Clients */}
                    <div className="columns small-12 medium-12 large-6" id="sec2">
                        <h2>Clients</h2>
                        
                         {/* Clients Wrap*/}
                        <div className="client_wrap">
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                        </div>

                        {/* Clients Form */}
                        <form id="dashboard-form">
                            <div className="container">

                                {/* First Name */}
                                <div className="columns small-12 medium-6 label">First Name:</div>
                                <div className="columns small-12 medium-6"><input id="fname" type="text" /></div>

                                {/* Last Name */}
                                <div className="columns small-12 medium-6 label">Last Name:</div>
                                <div className="columns small-12 medium-6"><input id="lname" type="text" /></div>

                                {/* Business Name */}
                                <div className="columns small-12 medium-6 label">Business Name:</div>
                                <div className="columns small-12 medium-6"><input id="business_name" type="text" /></div>

                                {/* Address */}
                                <div className="columns small-12 medium-6 label">Billing Address:</div>
                                <div className="columns small-12 medium-6"><input id="address" type="text" /></div>

                                {/* Address */}
                                <div className="columns small-12 medium-6 label">Phone:</div>
                                <div className="columns small-12 medium-6"><input id="phone" type="tel" /></div>

                                {/* Business Name */}
                                <div className="columns small-12 medium-6 label">Signs Currently Rented<br></br> - Enter Sign IDs:</div>
                                <div className="columns small-12 medium-6"><input id="business_name" type="text" /></div>
                                
                                {/* Business Name */}
                                <div className="columns small-12 medium-6 label">Contact Term:</div>
                                <div className="columns small-12 medium-6"><input id="contract_term" type="text" /></div>

                                {/* Rent */}
                                <div className="columns small-12 medium-6 label">Total Monthly Rent:</div>
                                <div className="columns small-12 medium-6"><input id="renu" type="number" min="0" /></div>
                            </div>

                            <p>&nbsp;</p>
                            <button type="submit" className="btn btn-default" id="sendform">Save</button>
                        </form>
                    </div>
                </div>

            </section>
            
        </div>
    )
}