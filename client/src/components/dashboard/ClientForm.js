import React from 'react';

function close_modal2(){
    var close_modal = document.getElementById("client_modal");
    close_modal.style.display = "none";
}

export default function ClientForm() {
    return(
        <div>
            {/* Client Modal Form*/}
            <div id="client_modal" className="modal">
             <div className="modal-content">
             <span id="close_btn" onClick={close_modal2} className="close">&times;</span>
                <h1>Add and Edit Customers</h1>

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
        </div>
    )
}