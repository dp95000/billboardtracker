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


                <BillboardForm></BillboardForm>


                <ClientForm></ClientForm>



            </section>



            {/*Logout */}
            <div className="row logout-section" >
                <div className="columns medium-12">
                    <h1>Finished Working?</h1>
                    <button id="logout">Log Out</button>
                </div>
            </div>








        </div>
    )
}