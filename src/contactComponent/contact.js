import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import altavita from '../images/altavita.png'

import './contact.css';

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <div >
            <div className="footer-contact">
                <div className="adresses footer-contact-box">

                    <div className="d-flex flex-column justify-content-between created logofooter">
                        <img src={altavita} width={'127px'} height={'26px'} className="logofooter float-center" alt="..." />
                        <p className="text-white C">© 2023  ALTA VITA LLC.</p>
                    </div>
                    <div className=" footer-menu">
                        <ListGroup.Item className="list-group-item-contact mb-2">
                            <Link className="text-white text-decoration-none " onClick={scrollToTop} to="/aboutus">ABOUT US</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact mb-2">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/contentservices">WHAT WE DO</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact mb-2">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/seoservices">SERVICES</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact mb-2">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/seoservices">BLOG</Link>
                        </ListGroup.Item>


                    </div>

                    <div className="footer-contact-box">
                        <ListGroup className="list-group-box">
                            <ListGroup.Item className="list-group-item-contact  stay-in-touch">STAY IN TOUCH   &nbsp;
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FontAwesomeIcon className="me-3 text-white" size="xl" icon={faLinkedinIn} />
                                <FontAwesomeIcon className="me-3 text-white" size="xl" icon={faFacebookF} />
                                <FontAwesomeIcon className="me-3 text-white" size="xl" icon={faInstagram} />
                            </ListGroup.Item><br></br>
                        </ListGroup>
                    </div>
                    <div className="footer-contact-box">
                        <ListGroup className="list-group-box">
                            <ListGroup.Item className="list-group-item-contact pt-0">
                                <FontAwesomeIcon icon={faPhone} size="xl" /> +374 95 007 777
                            </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon icon={faWhatsapp} size="xl" /> +1 (848) 404-8844 </ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon icon={faLocationDot} size="xl" /> Amiryan str. 14, yerevan, 0001</ListGroup.Item>
                        </ListGroup>
                    </div>



                </div>
            </div >

        </div >

    )
}
export default Navbar
