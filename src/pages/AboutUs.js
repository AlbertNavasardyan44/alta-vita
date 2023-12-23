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

                <div className='d-flex flex-row header-content'>
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
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            <br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            <br></br><br></br>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient
                        </p>

                    </div>
                    <div>
                        <img src={ourhistoryimg} width={'420px'} height={'622px'} className="rounded float-center" alt="..." />

                    </div>
                </div>
            </div>

            <div className='our-mission'>
                <h1>Our Mission</h1>
                <p>We are on a mission to positively impact the world by bringing cutting-edge marketing
                    solutions to your brands and organizations as we build the best performance marketing
                    agency creating growth opportunities for our people and driving business results for our
                    clients.</p>

            </div>
            <div className='about-footer-bg'>
                <div className='about-footer'>
                    <div className='text-center'>
                        <img src={layer_1} width={'105px'} height={'90px'} className="rounded float-center" alt="..." />

                        <h1>80+</h1>
                        <p>Clients with us for 4 years or more</p>

                    </div>
                    <div className='text-center'>
                        <img src={layer_2} width={'94px'} height={'62px'} className="rounded float-center" alt="..." />

                        <h1>95%</h1>
                        <p>Client retention rate</p>
                    </div>
                    <div className='text-center'>
                        <img src={layer_1} width={'85px'} height={'85px'} className="rounded float-center" alt="..." />

                        <h1>45%</h1>
                        <p>Average business growth through us</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )

}
export default Aboutus;