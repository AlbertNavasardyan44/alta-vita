import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
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

                    <div className="d-flex flex-column justify-content-between">
                        <img src={altavita} width={'127px'} height={'26px'} className="rounded float-center" alt="..." />
                        <p className="text-white">© 2023  ALTA VITA LLC.</p>
                    </div>
                    <div className=" footer-menu">
                        <ListGroup.Item className="list-group-item-contact">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/Aboutus">ABOUT US</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/Contentservices">WHAT WE DO</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/Seoservices">SERVICES</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact">
                            <Link className="text-white text-decoration-none" onClick={scrollToTop} to="/Seoservices">BLOG</Link>
                        </ListGroup.Item>


                    </div>

                    <div className="footer-contact-box">
                        <ListGroup className="list-group-box">
                            <ListGroup.Item className="list-group-item-contact">STAY IN TOUCH   &nbsp;
                                <FontAwesomeIcon className="me-3" icon={faLinkedinIn} />
                                <FontAwesomeIcon className="me-3" icon={faFacebookF} />
                                <FontAwesomeIcon className="me-3" icon={faInstagram} />
                            </ListGroup.Item><br></br>
                            <ListGroup.Item className="list-group-item-contact"> tel: +374 95 007 777</ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact">Whatsapp: +1 (848) 404-8844 Address:</ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact">Amiryan str. 14, yerevan, 0001</ListGroup.Item>
                        </ListGroup>
                    </div>



                </div>
            </div>
          
        </div>

    )
}
export default Navbar
