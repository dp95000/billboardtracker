import React from 'react';
import BillboardForm from './BillboardForm';
import ClientForm from './ClientForm';
import BillboardBG from '../../images/billboard-bg.jpg';

{/* Function to Open Billboard Modal */ }
function modal() {
    var modal = document.getElementById("billboard_modal");
    modal.style.display = "block";
}

{/* Function to Open Billboard Modal */ }
function modal2() {
    var modal = document.getElementById("client_modal");
    modal.style.display = "block";
}

export default function Dashboard() {
    return (
        <div>

            <section id="content dashboard">

                {/* Banner */}
                <div className="columns medium-12" id="banner" style={{ backgroundImage: "url(" + BillboardBG + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                    <div className="columns medium-12 padfix">
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
                        <button id="billboard_add" class="btn_large" onClick={modal}>Add New</button>

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
                        <button id="client_add" class="btn_large" onClick={modal2}>Add New</button>
                    </div>
                </div>

                {/*Logout */}
                <div className="row logout-section" >
                    <div className="columns medium-12">
                        <h1>Finished Working?</h1>
                        <button id="logout">Log Out</button>
                    </div>
                </div>

            </section>

        </div>
    )
}