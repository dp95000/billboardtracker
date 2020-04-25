import React from 'react';
import BBicon from '../../images/billboard-icon.png';

export default function About() {
    return (
        <div>
            <section id="content">
                <div className="row">
                    <div className="columns medium-12" id="about">
                        <img className="img-center" alt="billboard" src={BBicon} />
                        <h3>Our Custom Billboard Tracking System</h3>
                        <p>Our billboard tracking system allows business owners in the Philadelphia area see which billboards are available
                        to rent, sizes, and locations.  In addition, our special application also provides a breakdown of local demographics, which
                        we believe is an important factor to take into account when considering an outdoor advertising campaign.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    )
}