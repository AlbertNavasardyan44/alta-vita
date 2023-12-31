import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'

import "./slider.css";

function DarkVariantExample() {
    const settings = {
        dots: false,
        Infinite: true,
        // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 8000
        },
        responsive: [
           
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
                    <div className='rounded-xl text-black h-[450px] card'>
                        <div>
                            <p>
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />

                            </p>
                        </div>

                        <div>
                            <p>
                                I finally decided to open my start-up earlier this year but needed help with the
                                digital marketing side of things. After working with Alta Vita for several months, they not only helped
                                me to get back on track with my SMM, SEO, and content but
                                also significantly boosted my brand...

                            </p>
                        </div>
                        <div>
                            <p>mi ban el stex pti lini</p>
                        </div>
                    </div>
                    <div className='rounded-xl text-black h-[450px] card'>
                        <div>
                            <p>
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />

                            </p>
                        </div>

                        <div>
                            <p>What can I say? Since the start of my collaboration
                                with Alta Vita, I’ve experienced nothing but pros. My online
                                presence is taken care of, my website looks great, and all of
                                my email marketing campaigns have generated plenty of new leads...


                            </p>
                        </div>
                        <div>
                            <p>mi ban el stex pti lini</p>
                        </div>
                    </div>
                    <div className='rounded-xl text-black h-[450px] card '>
                        <div>
                            <p>

                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />

                            </p>
                        </div>

                        <div>
                            <p>I’m what the kids like to refer to as a "boomer,
                                " and I recently decided to take my business online after
                                being convinced by my tech-savvy kids. Needless to say, I
                                don’t know much about digital marketing at all, let alone
                                social media. I immediately decided...


                            </p>
                        </div>
                        <div>
                            <p>mi ban el stex pti lini</p>
                        </div>
                    </div>
                    <div className='rounded-xl text-black h-[450px] card'>
                        <div>
                            <p>
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                <FontAwesomeIcon className='text-primary' icon={faStar} />
                                {/* <FontAwesomeIcon className='text-primary' icon={faStar} /> */}

                            </p>
                        </div>

                        <div>
                            <p>"Alta Vita took our business to new heights! Their expertise,
                                innovation, and commitment to understanding our brand set them apart.
                                We're not just clients; we're partners in success. Highly recommend!"
                                Highly recommend!"
                                Highly recommend!"
                            </p>
                        </div>
                        <div>
                            <p>mi ban el stex pti lini</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>

    );
}

export default DarkVariantExample;