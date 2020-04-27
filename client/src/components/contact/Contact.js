import React from 'react';

export default function Contact() {
    return (
        <div>
            <section id="content">
                <div className="row">
                    <div className="columns medium-12" id="contact">
                        <h3>Contact Us</h3>
                        <p>If you have any questions about this site or the services we offer, please don't hesitate to reach out to us.</p>
                        <br />
                        <form id="contact-form">
                            <input id="senderName" type="text" placeholder="Name" />
                            <input id="senderEmail" type="email" placeholder="Email" />
                            <textarea id="senderMessage" rows="4" cols="50" placeholder="Comments"></textarea>
                            <button type="button" id="sendform">Submit Form</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}