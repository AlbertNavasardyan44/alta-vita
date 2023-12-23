import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";
import Slider from "../components/slider/slider.js";

import altavita from '../images/altavita.png'
import ourhistoryimg from '../images/ourhistory.png'
import buisness1 from '../images/Rectangle 82.png'
import buisness2 from '../images/Rectangle 83.png'
import buisness3 from '../images/Rectangle 84.png'
import search from '../images/search-purple.png'
import seo from '../images/seo.png'

// import Contact from "../contactComponent/ContactComp.js";
// import about from "../images/aboutHeader.png";
import './mainServices.css';


function MainServices() {
    return (
        <div className='main-services'>
            <div>
                <Navbar />
            </div>

            <div className='main-our-services'>
                <h1>Our Services</h1>
            </div>

            <div>


                <Slider />

            </div>


            <Contact />
        </div>
    )

}
export default MainServices;