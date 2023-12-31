// import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from 'react-bootstrap/Container';
import logo from "../../images/logo.png";

import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
const Menu = () => {
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {

    //         setColorchange(true);
    //     }
    //     else {

    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    var links = document.getElementsByClassName('changeable');
    function changeColorToRed(e) {
        e.target.style.color = e.target.style.color ? null : 'red';
    }
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', changeColorToRed);
    }
    return (
        <div>
            <Navbar expand="lg" className='navbar  navbar-expand-lg navbar-light navbar-services' >
                <Container>
                    <Navbar.Brand className="logo" to="/" href="/">

                        <img src={logo} />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link className="nav-link" href="/" ></Nav.Link>
                            <Nav.Link className="nav-link " href="/aboutus" onClick={scrollToTop} >ABOUT US</Nav.Link>
                            <Nav.Link className="nav-link" href="/whatwedo" onClick={scrollToTop}>WHAT WE DO</Nav.Link>
                            <Nav.Link className="nav-link" href="/services" onClick={scrollToTop}>SERVICES</Nav.Link>
                            <Nav.Link className="nav-link" href="/blog" onClick={scrollToTop}>BLOG</Nav.Link>
                            <Nav.Link className="nav-link" href="/call" onClick={scrollToTop}>CONTACTS</Nav.Link>
                            {/* <Nav.Link className="nav-link" href="/Contact" onClick={scrollToTop}>LETS TALK</Nav.Link> */}



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;