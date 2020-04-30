import React from 'react';
import BillboardForm from './BillboardForm';
import ClientForm from './ClientForm';

{/* Function to Open Billboard Modal */}
function modal(){
    var modal = document.getElementById("billboard_modal");
    modal.style.display = "block";
}

{/* Function to Open Billboard Modal */}
function modal2(){
    var modal = document.getElementById("client_modal");
    modal.style.display = "block";
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

                         {/* Billboard Modal Form*/}
                        <BillboardForm></BillboardForm>
                        
                        {/* Billboard Wrap*/}
                        <div className="billboard_wrap">
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="billboard_listing">
                                <h3 className="list-title">Billboard Number</h3><button id="bbmodal" onClick={modal} className="edit">Edit</button><button className="delete">Delete</button>
                            </div>
                        </div>

                    </div>
                    {/* Clients */}
                    <div className="columns small-12 medium-12 large-6" id="sec2">
                        <h2>Clients</h2>

                        {/* Billboard Modal Form*/}
                        <ClientForm></ClientForm>
                        
                         {/* Clients Wrap*/}
                        <div className="client_wrap">
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                            <div className="client_listing">
                                <h3 className="list-title">Client Name</h3><button id="clmodal" className="edit" onClick={modal2}>Edit</button><button className="delete">Delete</button>
                            </div>
                           
                        </div>

                    </div>
                </div>

            </section>
            
        </div>
    )
}