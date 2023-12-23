import React from 'react';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";
import Slider from "../components/slider/slider.js";
import { Carousel } from 'react-responsive-carousel';

import altavitalogo from '../images/logo.webp'
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

            <div className='home-header'>
                <div className='d-flex flex-row home-header-content'>

                </div>
                <div className='text-white home-header-text'>
                    <h2>we are setting the standards</h2>
                    <h2>and delivering excellence</h2>
                </div>
            </div>


            <div className='section-about'>


                <div className='about'>
                    <div className='home-about-text'>
                        <h1>About</h1>
                        <p className='about-text '>
                            At Alta Vita, we're more than a team; we're a community of forward-thinkers, creative minds, and digital enthusiasts who thrive on challenges and embrace the ever-evolving world of digital marketing. If you're passionate about making a real impact, contributing to innovative solutions, and being part of a dynamic, collaborative environment, then Alta Vita is the place for you.

                        </p>
                        <button className='lets-talk-about'>LET'S TALK</button>

                    </div>
                    <div className='home-about-img'>
                        <img src={altavitalogo} width={''} height={''} className="rounded float-end" alt="..." />

                    </div>
                </div>
            </div>
            <div className='section-2'>
                <h1>What We Do</h1>
                <div className='what-we-do'>

                    <div className='block'>
                        <div>
                            <img src={search} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>  SEO</div>
                        <div>
                            <img src={content} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>CONTENT CREATION</div>
                        <div>
                            <img src={smm} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>
                            SMM
                        </div>
                        <div> <img src={ppc} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>PPC</div>
                    </div>
                    <div className='block'>
                        <div><img src={email} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>EMAIL MANAGEMENT</div>
                        <div>
                            <img src={video} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>
                            VIDEO EDITNG</div>
                        <div><img src={animation} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>ANIMATION</div>
                        <div><img src={landing} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>LANDING PAGES</div>
                    </div>
                    <div className='block'>
                        <div><img src={lead} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>LEAD NURTURE</div>
                        <div><img src={optimization} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>SITE OPTIMIZATION</div>
                        <div><img src={creative} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br> CREATIVE STRATEGY</div>
                        <div><img src={youtube} width={'35'} height={'35'} className="rounded float-center" alt="..." />
                            <br></br>YOUTUBE ADS</div>
                    </div>
                </div>
            </div>

            <Slider />
            <div className='home-footer'>
                <div className='text-center'>
                    <img src={layer1} width={'105px'} height={'90px'} className="rounded float-center" alt="..." />

                    <h1>80+</h1>
                    <p>Clients with us for 4 years or more</p>

                </div>
                <div className='text-center'>
                    <img src={layer2} width={'94px'} height={'62px'} className="rounded float-center" alt="..." />

                    <h1>95%</h1>
                    <p>Client retention rate</p>
                </div>
                <div className='text-center'>
                    <img src={layer1} width={'85px'} height={'85px'} className="rounded float-center" alt="..." />

                    <h1>45%</h1>
                    <p>Average business growth through us</p>
                </div>


            </div>
            <div className='work-procces'>
                <div className='work-procces-body'>
                    <h1>Work Process</h1>
                    <div className='d-flex strategy str1'>
                        <div className='number n1'>
                            <img src={fife} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className='growth'>
                            <h2>Growth Strategy</h2>
                            <p>Define next steps & goals with our team to help you scale</p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n2'>
                            <img src={four} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Strategy Optimization</h2>
                            <p>Let our team maximize your results through optimization.</p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n3'>
                            <img src={tree} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Marketing Level-set</h2>
                            <p>Work with your marketing team to strengthen your strategy.</p>
                        </div>
                    </div>
                    <div className='d-flex str' >
                        <div className='number n4'>
                            <img src={two} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Solutions Call</h2>
                            <p>Receive an audit & our expert insights</p>
                        </div>
                    </div>
                    <div className='d-flex str'>
                        <div className='number n5'>
                            <img src={one} width={'129px'} height={'87px'} className="rounded float-center" alt="..." />

                        </div>
                        <div className='growth'>
                            <h2>Discovery Call</h2>
                            <p>Tell us about your business’ needs & goals</p>
                        </div>
                    </div>

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
                    <h1 style={{ "marginTop": "141px" }} >Our Projects</h1>
                    <div className='block1' >


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
                        <h1>Don’t Be Sold... Start a Conversation!</h1>
                        <p>Let’s chat about what you want to achieve - and see what others are doing to succeed.</p>
                        <button className='lets-talk'>LET'S TALK</button>
                    </div>
                </div>
            </div>
            <Contact />
        </div >
    )

}
export default Home;