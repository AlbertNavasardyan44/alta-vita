import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";
import search from '../images/search-purple.png'
import seo from '../images/seo.png'

import PaginatedItems from "../components/pagination.js";
// import about from "../images/aboutHeader.png";
import './Blog.css';


function Blog() {
    return (

        <div>
            <div>
                <Navbar />
            </div>
            {/* <PaginatedItems itemsPerPage/>={4} />, */}
            {/* document.getElementById('container') */}
            <div className='blog'>
                <div className='blog-section' id='container'>
                    <div className=' blog-header'>
                        <h1>On the Blog</h1>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>
                            </div>
                            <button>Read More</button>

                        </div>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>
                            </div>
                            <button>Read More</button>

                        </div>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>
                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                        <div className='blog-block1'>
                            <div>
                                <img src={seo} width={'100%'} height={'246'} alt="..." />
                            </div>
                            <div>
                                <h1 className='mt-4'>How to Use the Facebook<br></br> Sharing Debugger Tool</h1>
                                <p>Don’t let the youth tell you differently; sharing your content on Facebook still holds more value than ever. Unfortunately, there…</p>

                            </div>
                            <button>Read More</button>

                        </div>

                    </div>
                </div>

            </div>

            <Contact />
        </div>
    )

}
export default Blog;