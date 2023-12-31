import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";

import altavita from '../images/altavita.png'
import ourhistoryimg from '../images/ourhistory.png'
import layer_1 from '../images/Layer_1.png'
import layer_2 from '../images/Layer_2.png'

// import Contact from "../contactComponent/ContactComp.js";
// import about from "../images/aboutHeader.png";
import './AboutUs.css';

function Aboutus() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='header'>

                <div className=' header-content'>
                    <div>
                        <img src={altavita} width={'416px'} height={'85px'} className="rounded float-center" alt="..." />

                    </div>
                    <div className='text-white header-text'>
                        <h2>we are setting the standards</h2>
                        <h2>and delivering excellence</h2>
                    </div>
                </div>



            </div>
            <div className='header-bg'>
                <div className='our-history'>
                    <div>
                        <h1>Our History</h1>
                        <p className='about-our-history-text'>
                            Alta Vita was born out of the passion and collaboration of a group of experts, each a guru in their own right, coming together with a shared goal: to create all-encompassing digital marketing solutions.

                            What started as individual plans for collaboration transformed into something bigger—a close-knit team that embraced the name Alta Vita, meaning Elevated Life. Why did we choose this name? It is a reflection of our commitment to not just uplift our clients' businesses but to genuinely improve their lives through tailored strategies. Alta Vita also serves as a haven for digital marketing specialists, giving them the chance to elevate their own expertise through meaningful collaboration.

                            Our motivation was simple: we observed a clear frustration among small-to-medium business owners and individual entrepreneurs with their product and service representation and marketing. There was a noticeable gap in the market: individualized services lacked the necessary reach, while one-size-fits-all solutions felt impersonal. In response, we crafted an approach that blends a diverse range of services with a commitment to providing each client with a personalized and tailored experience.
                        </p>

                    </div>
                    <div>
                        <img src={ourhistoryimg} width={'420px'} height={'622px'} className="rounded float-center" alt="..." />

                    </div>
                </div>
            </div>

            <div className='our-mission-about'>
                <h1>Our Mission</h1>
                <p>Alta Vita is dedicated to scaling businesses through personalized digital marketing solutions. Our team of industry experts collaborates to bridge the gap between individualized and impersonal services, crafting accessible and customized strategies for each client and project.
                </p>

            </div>
            <div className='about-footer-bg'>
                <div className='about-footer'>
                    <div className='text-center'>
                        <img src={layer_1} width={'105px'} height={'90px'} className="rounded float-center" alt="..." />

                        <h1 className='mt-3'>80+</h1>
                        <p>Clients with us for 4 years or more</p>

                    </div>
                    <div className='text-center'>
                        <img src={layer_2} width={'94px'} height={'62px'} className="rounded float-center" alt="..." />

                        <h1 className='mt-3'>95%</h1>
                        <p>Client retention rate</p>
                    </div>
                    <div className='text-center'>
                        <img src={layer_1} width={'85px'} height={'85px'} className="rounded float-center" alt="..." />

                        <h1 className='mt-3'>45%</h1>
                        <p>Average business growth through us</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )

}
export default Aboutus;