import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import service1 from '../../images/service1.png'
import service2 from '../../images/service2.png'

import "./slider.css";

function DarkVariantExample() {
    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,

        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 8000
        },
        responsive: [

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className='slider-block'>
            <div className='mt-20'>
                <Slider {...settings}>
                    <div className='rounded-xl text-black h-[450px] cardservice'>
                        <div className='slide-card'>
                            <div>
                                <img src={service1} className="rounded float-center" alt="..." />

                            </div>
                            <div className='card-text mr-5 ml-5'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan
                                    lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat
                                    cupidatat non
                                </p>
                                <button className='service-button'>LET'S TALK</button>

                            </div>
                            <div>
                                <img src={service2} className="rounded float-center service2" alt="..." />

                            </div>

                        </div>



                    </div>
                    <div className='rounded-xl text-black h-[450px] cardservice'>
                        <div className='slide-card'>
                            <div>
                                <img src={service1} className="rounded float-center" alt="..." />

                            </div>
                            <div className='card-text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan
                                    lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat
                                    cupidatat non
                                </p>
                                <button className='service-button'>LET'S TALK</button>

                            </div>
                            <div>
                                <img src={service2} className="rounded float-center service2" alt="..." />

                            </div>

                        </div>



                    </div>
                    <div className='rounded-xl text-black h-[450px] cardservice'>
                        <div className="slide-card">
                            <div>
                                <img src={service1} className="rounded float-center" alt="..." />

                            </div>
                            <div className='card-text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan
                                    lacinia. Quisque tincidunt scelerisque libero. Excepteur sint occaecat
                                    cupidatat non
                                </p>
                                <button className='service-button'>LET'S TALK</button>

                            </div>
                            <div>
                                <img src={service2} className="rounded float-center service2" alt="..." />

                            </div>

                        </div>



                    </div>



                </Slider>
            </div>

        </div>

    );
}

export default DarkVariantExample;