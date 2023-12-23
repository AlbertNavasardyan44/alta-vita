import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Contact from "../../contactComponent/contact.js";
import buisness1 from '../../images/Rectangle 82.png'
import buisness2 from '../../images/Rectangle 83.png'
import buisness3 from '../../images/Rectangle 84.png'
import bxs from '../../images/bxs.png'
import './Whatwedo.css';
const numbers = ["task 1", "task 2", "task 3"];
const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
);


function Whatwedo() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='whatwedo-header text-center'>
                <div className='whatwedo-text text-center'>
                    <h1>What We Do?</h1>


                    <p>We build projects that change <br></br> lifestyles, ways of thinking, and<br></br> give the world a new vision.</p>
                </div>

            </div>



            <div className='buisness-llc d-flex'>
                <div className='buisness-img'>
                    <div>
                        <img src={buisness1} width={''} height={''} className="rounded float-center mb-5 " alt="..." />

                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src={buisness2} width={''} height={''} className="rounded float-center me-5" alt="..." />

                        </div>

                        <div>
                            <img src={buisness3} width={''} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>
                </div>
                <div className='buisness-text'>
                    <h1>Business LLC 1</h1>
                    <ul >
                        <li key={1}>{listItems}</li>
                       

                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                </div>
            </div>

            <div className='buisness-llc d-flex flex-row-reverse'>
                <div className='buisness-img'>
                    <div>
                        <img src={buisness1} width={''} height={''} className="rounded float-center mb-5 " alt="..." />

                    </div>
                    <div className='d-flex justify-content-end'>
                        <div>
                            <img src={buisness2} width={''} height={''} className="rounded float-center me-5" alt="..." />

                        </div>

                        <div>
                            <img src={buisness3} width={''} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>
                </div>
                <div className='buisness-text'>
                    <h1>Business LLC 2</h1>
                    <ul >
                        <li key={2}>{listItems}</li>
                       

                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                </div>
            </div>
            <div className='what-we-do-buisness-llc-text'>
                <img src={bxs} width={'86px'} height={'85px'} className="rounded float-center" alt="..." />
                <p className='text-white buisness-llc-text-what'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                <p className='text-right text-white buisness-llc-text-right'>Business LLC</p>
            </div>
            <div className='buisness-llc d-flex'>
                <div className='buisness-img'>
                    <div>
                        <img src={buisness1} width={''} height={''} className="rounded float-center mb-5 me-5" alt="..." />

                    </div>
                    <div className='d-flex '>
                        <div>
                            <img src={buisness2} width={''} height={''} className="rounded float-center me-5" alt="..." />

                        </div>

                        <div>
                            <img src={buisness3} width={''} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>
                </div>
                <div className='buisness-text'>
                    <h1>Business LLC 1</h1>
                    <ul >
                        <li key={3}>{listItems}</li>
                       

                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                </div>
            </div>

            <div className='buisness-llc d-flex flex-row-reverse last'>
                <div className='buisness-img '>
                    <div>
                        <img src={buisness1} width={''} height={''} className="rounded float-center mb-5 " alt="..." />

                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img src={buisness2} width={''} height={''} className="rounded float-center me-5" alt="..." />

                        </div>

                        <div>
                            <img src={buisness3} width={''} height={''} className="rounded float-center" alt="..." />

                        </div>
                    </div>
                </div>
                <div className='buisness-text'>
                    <h1>Business LLC 2</h1>
                    <ul >
                        <li key={4}>{listItems}</li>
                       

                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                </div>
            </div>
            <Contact />
        </div>
    )

}
export default Whatwedo;