import React from 'react';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";
import Slider from "../components/slider/slider.js";
import { Carousel } from 'react-responsive-carousel';

import altavitalogo from '../images/logo_874x672.webp'
import altavitalogomobile from '../images/logo-392x384.webp'

import smm from '../images/smm.png'
import content from '../images/content.png'
import search from '../images/search.png'
import ppc from '../images/ppc.png'
import email from '../images/email.png'
import video from '../images/video.png'
import animation from '../images/animation.png'
import landing from '../images/landing.png'
import lead from '../images/lead.png'
import optimization from '../images/optimization.png'
import creative from '../images/creative.png'
import youtube from '../images/youtube.png'
// import ComingSoon from 'react-coming-soon'

import altavita from '../images/altavita.png'
import ourhistoryimg from '../images/ourhistory.png'
import layer_1 from '../images/Layer_1.png'
import layer_2 from '../images/Layer_2.png'
import layer1 from '../images/layer1.png'
import layer2 from '../images/layer2.png'
import layer3 from '../images/layer3.png'
import fife from '../images/05.png'
import four from '../images/04.png'
import tree from '../images/03.png'
import two from '../images/02.png'
import one from '../images/01.png'

import block1 from '../images/block1.png'


import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPager } from '@fortawesome/free-solid-svg-icons'



import './Home.css';

function Home() {

    return (
        <div>

            <div>
                <Navbar />
            </div>
            {/* <ComingSoon title="Coming Soon" bgColor="#fff" textColor="#212121" illustration="web-development" /> */}

            <div className='home-header'>
                <div className='d-flex flex-row home-header-content'>

                </div>
                <div className='text-white home-header-text'>
                    <h2>We’re setting the standards and delivering excellence. </h2>
                    <h2>Empower your brand and expand your reach.</h2>
                </div>
            </div>


            <div className='section-about'>


                <div className='about'>
                    <div className='home-about-text'>
                        <h1>Welcome to Alta Vita!</h1>
                        <p className='about-text '>
                            Drive your sales to the roof with our marketing services. Whether it's SEO, SMM, content creation, web development and design, lead generation, videos, animations, PPC, or graphic design, we've got you covered! Partner with us for a powerful online presence that increases revenues and brand recognition. From startups to established businesses, we tailor solutions for a swift impact. Save time and resources, and entrust your brand's digital footprint to us. Boost your brand effortlessly with Alta Vita!

                        </p>
                        <button className='lets-talk-about'>LET'S TALK</button>

                    </div>
                    <div className='home-about-img'>
                        <img src={altavitalogo} width={'632px'} height={'490px'} className="rounded float-end" alt="..." />

                    </div>
                </div>
            </div>
            <div className='section-2'>
                <h1>What We Do</h1>
                <div className='what-we-do'>

                    <div className='block'>
                        <div>
                            <img src={search} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>
                            <p> SEO</p>
                        </div>
                        <div>
                            <img src={content} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>Web Development</div>
                        <div>
                            <img src={smm} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>
                            Animation
                        </div>
                        <div> <img src={ppc} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>SMM</div>
                    </div>
                    <div className='block'>
                        <div><img src={email} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>Content Creation</div>
                        <div>
                            <img src={video} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>
                            PPC</div>
                        <div><img src={animation} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>Email Marketing</div>
                        <div><img src={landing} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br> Video Production</div>
                    </div>
                    <div className='block'>
                        <div><img src={lead} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>UI/UX</div>
                        <div><img src={optimization} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>Graphic Design</div>
                        <div><img src={creative} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br> Branding</div>
                        <div><img src={youtube} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>Affiliate Marketing</div>
                    </div>
                </div>
            </div>
            <div className='slider-reviews'>
                <div>
                    <h1>Reviews</h1>
                </div>
                <Slider />
            </div>

            <div className='home-footer'>
                <div className='text-center'>
                    <img src={layer1} width={'105px'} height={'90px'} className="rounded float-center" alt="..." />

                    <h1 className='mt-3'>85%</h1>
                    <p>Client Retention Rate</p>

                </div>
                <div className='text-center'>
                    <img src={layer2} width={'94px'} height={'62px'} className="rounded float-center" alt="..." />

                    <h1 className='mt-3' >55%</h1>
                    <p>Average Growth Rate Through Us</p>
                </div>
                <div className='text-center'>
                    <img src={layer1} width={'85px'} height={'85px'} className="rounded float-center" alt="..." />

                    <h1 className='mt-3'>95%</h1>
                    <p>Customer Satisfaction rate</p>
                </div>


            </div>
            <div className='work-procces'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="691" height="1016" viewBox="0 0 691 1016" fill="none">
                    <g filter="url(#filter0_b_615_1149)">
                        <path d="M575.671 2.61481C577.592 -0.748142 582.443 -0.743653 584.358 2.62283L1156.49 1008.27C1158.38 1011.6 1155.98 1015.74 1152.14 1015.74H5.42594C1.58694 1015.74 -0.819924 1011.6 1.08458 1008.26L575.671 2.61481Z" fill="url(#paint0_radial_615_1149)" />
                        <path d="M575.671 2.61481C577.592 -0.748142 582.443 -0.743653 584.358 2.62283L1156.49 1008.27C1158.38 1011.6 1155.98 1015.74 1152.14 1015.74H5.42594C1.58694 1015.74 -0.819924 1011.6 1.08458 1008.26L575.671 2.61481Z" fill="url(#paint1_linear_615_1149)" fill-opacity="0.67" />
                    </g>
                    <defs>
                        <filter id="filter0_b_615_1149" x="-41.5815" y="-41.9048" width="1240.73" height="1099.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="21" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_615_1149" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_615_1149" result="shape" />
                        </filter>
                        <radialGradient id="paint0_radial_615_1149" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-18.1733 32.1369) rotate(44.7694) scale(1674.28 2679.09)">
                            <stop stop-color="white" stop-opacity="0.4" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_615_1149" x1="587.85" y1="-4.99976" x2="587.85" y2="1659.32" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3712A3" />
                            <stop offset="0.348958" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg> */}
                <h1>Work Process</h1>
                <div className='work-procces-body'>



                    <div className='d-flex strategy str1'>
                        <div className='number n1'>
                            <img src={fife} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className='growth'>
                            <h2> Strategic Consultation</h2>
                            <p>Book a session to share your goals and expectations.</p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n2'>
                            <img src={four} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Tailored Follow-Up</h2>
                            <p>
                                Considering your business, budget, and targets.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n3'>
                            <img src={tree} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Digital Marketing Blueprint</h2>
                            <p>Receive a customized plan based on our discussions.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex str' >
                        <div className='number n4'>
                            <img src={two} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Effortless Execution</h2>
                            <p>Let us handle the implementation for you.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n5'>
                            <img src={one} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2> Results Discussion</h2>
                            <p>We'll review the outcomes and plan for the future.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='mb-5'>
                    <button className='lets-talk-about mx-auto'>START NOW</button>
                </div>
            </div>
            <div className='get-your-free-section'>
                <div className='Get-Your-Free'>
                    <h2>Get Your Free Instant SEO Audit Now!</h2>
                    <p>Enter your information to get started</p>
                    <div className=''>
                        <form className='form-box'>

                            <input type="text" name="Website-URL" placeholder="Website URL" />


                            <input type="text" name="Email" placeholder="Email" />


                            <input type="text" name="name" placeholder="Name" />

                            <input className="submit" type="submit" placeholder="Get Audit" />
                        </form>
                    </div>
                </div>


            </div>
            <div className="our-partners">
                <div className='our-partners-body'>
                    <h1>Our Partners</h1>
                    <div className='block1'>
                        <div>
                            <img src={block1} width={'100%'} height={''} className="rounded float-center" alt="..." />

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in
                                lorem sit amet leo accumsan lacinia.
                                Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            </p>
                        </div>
                    </div>
                    <div className='block1'>

                        <div>
                            <p style={{ "textAlign": "right" }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in
                                lorem sit amet leo accumsan lacinia.
                                Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            </p>
                        </div>
                        <div>
                            <img src={block1} width={'100%'} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>
                    <div className='block1'>
                        <div>
                            <img src={block1} width={'100%'} height={''} className="rounded float-center" alt="..." />

                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in
                                lorem sit amet leo accumsan lacinia.
                                Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            </p>
                        </div>
                    </div>
                    <div className='block1'>

                        <div>
                            <p style={{ "textAlign": "right" }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in
                                lorem sit amet leo accumsan lacinia.
                                Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non
                            </p>
                        </div>
                        <div>
                            <img src={block1} width={'100%'} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>

                    {/* <div></div> */}
                </div>

            </div>

            <div>
                <div className='dont-be-footer'>

                    <div className='dont-be-sold'>
                        <h1>
                            Power up your online presence and boost brand recognition
                        </h1>
                        <p>
                            Effective digital marketing is not a luxury; it’s a must!
                        </p>
                        <p>
                            Book your initial consultation with us today and take your business to the next level.

                        </p>
                        <button className='lets-talk'>LET'S TALK</button>
                    </div>
                </div>
            </div>

            <Contact />
        </div >
    )

}
export default Home;