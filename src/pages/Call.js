import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Call.css';
function Call() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="containerrrr">


                <div className='call-section' id='container'>
                    <div className=' contact-header'>
                        <h2>Get in Touch with Alta Vita</h2>
                        <h2> Digital Marketing Agency</h2>
                        <div className="contacts">
                            <p>Tel: +374 95 007 777</p>
                            <p>Whatsapp: +1 (848) 404-8844</p>
                            <p>Address: Amiryan str. 14, Yerevan, 0001</p>
                        </div>

                        <div className="our-team">
                            <p>Our team is available during our business hours to assist you in the best way possible.</p>
                        </div>
                        <div className="connect-with-us">
                            <h2> Connect with Us</h2>

                        </div>
                        <div className="we-social">
                            <p>We're social! Follow us on our social media channels to stay updated on the latest trends, industry insights, and exciting projects.</p>
                        </div>

                    </div>
                    <div className="call-icons d-flex">
                        <FontAwesomeIcon className="me-3 " size="2xl" icon={faLinkedinIn} />
                        <FontAwesomeIcon className="me-3" size="2xl" icon={faFacebookF} />
                        <FontAwesomeIcon className="me-3" size="2xl" icon={faInstagram} />
                    </div>

                    <div className="form-section">
                        <h2>Request a Proposal</h2>
                        <div className=''>
                            <form className=''>

                                <div className="d-flex">
                                    <input className="w-50 me-3 mt-3 p-2" type="text" name="Website-URL" placeholder="Website URL" />
                                    <input className="w-50  mt-3 p-2" type="text" name="Email" placeholder="Email" />
                                </div>
                                <div className="d-flex">
                                    <input className="w-50 me-3 mt-3 p-2" type="text" name="name" placeholder="Name" />
                                    <input className="w-50  mt-3 p-2" type="text" name="Email" placeholder="Email" />

                                </div>
                                <div className="d-flex flex-column">
                                    <input className="w-100 mt-3 p-2" type="text" name="name" placeholder="Name" />
                                    <input className="w-100 mt-3 p-2" type="text" name="Email" placeholder="Email" />

                                </div>
                                <div className="d-flex call-button">
                                    <input className="submit-call" type="submit" value="Send Request" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>




            <Contact />
        </div>
    )
}
export default Call;