import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar.js";
import Contact from "../contactComponent/contact.js";

import altavita from '../images/altavita.png'
import ourhistoryimg from '../images/ourhistory.png'
import buisness1 from '../images/Rectangle 82.png'
import buisness2 from '../images/Rectangle 83.png'
import buisness3 from '../images/Rectangle 84.png'
import search from '../images/search-purple.png'
import seo from '../images/seo.png'

// import Contact from "../contactComponent/ContactComp.js";
// import about from "../images/aboutHeader.png";
import './Services.css';


function Services() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='services-header'>


            </div>
            <div className='seo-section'>
                <div className='d-flex seo-header'>
                    <img src={search} width={'54'} height={'56'} className="rounded float-center" alt="..." />
                    <h1>SEO</h1>
                </div>
                <div className='d-flex seo-text'>
                    <div className='txt1'>
                        <p>
                            Search Engine Optimization (SEO) consists of optimizing content to rank higher on search engines like Google, Bing, or other major browsers. Evolving beyond just keywords, it now prioritizes user experience and quality content. Understanding user intent and delivering valuable content is essential for success in today’s day and age.
                            At Alta Vita, we facilitate SEO for your business. Our tailored approach includes keyword analysis, on- and off-page SEO, and audits. In addition, we offer international, local, and eCommerce SEO. Likewise, we cover technical audits, content optimization, link building, and performance tracking.

                        </p>
                    </div>

                    {/* <div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce wisi. Integer lacinia. Aliquam in lorem sit amet leo accumsan lacinia.
                            Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non </p>
                    </div> */}
                </div>
            </div>

            <div className='img'>
                <img src={seo} width={''} height={''} className="rounded float-center" alt="..." />
            </div>

            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>SEO Audits</h1>
                    </div>
                </div>
                <div>
                    <p>
                        Have us conduct comprehensive website SEO audits. This detailed analysis assesses your website's structure, content, and performance, uncovering both strengths and weaknesses. From keyword analysis to technical SEO assessments, these audits serve as the foundation for a successful optimization strategy, ensuring your website ranks highly in search engine results. Following the initial audit, our SEO experts will present the results from the audit, make suggestions, and implement necessary changes to boost your rankings in search engine page results.
                    </p>
                </div>


            </div>


            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>
                            On-Page SEO
                        </h1>
                    </div>
                </div>
                <div>
                    <p>
                        Hire us to enhance your website's performance via diligent on-page SEO. Our specialists offer precise web page optimization according to the latest updates, ensuring that your website aligns with search engine algorithms. We will structure your meta tags and website content, improve page load speed, and fine-tune your site for maximum visibility. By prioritizing quality content, mobile responsiveness, and user experience, our team will boost three key factors: your ranking, engagement rates, and, most importantly, conversion rates.

                    </p>
                </div>


            </div>

            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>off-page-SEO</h1>
                    </div>
                </div>
                <div>
                    <p>
                        Although on-page SEO is crucial for high rankings, many website owners underestimate the value of off-page SEO. Strategic off-page SEO can provide your website with a significant competitive advantage. Our team ensures your website gains high-quality backlinks via targeted link-building campaigns, helping you to create connections with reputable websites. This immediately makes your website more trustworthy in the eyes of search engines and creates a network of sites that collaborate for mutual benefit.

                    </p>
                </div>


            </div>

            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>Local SEO</h1>
                    </div>
                </div>
                <div>
                    <p>
                        Local SEO is fundamental when your goal is to establish a name for your business in your region and offer localized services. Our team will help you optimize your local online presence through accurate business listings, localized content, and positive customer reviews. We create and update Google My Business profiles and incorporate targeted keyword strategies for improved regional credibility, helping you attract more engagement from potential clients who are close in proximity.


                    </p>
                </div>


            </div>

            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>
                            International SEO
                        </h1>
                    </div>
                </div>
                <div>
                    <p>
                        In the era of globalization, international SEO is essential for expanding your market reach, especially if you aim to build a more diverse customer base and establish your brand overseas. Our approach to this goal includes multilingual content optimization and tag implementation, ensuring your website is accessible and appealing to international audiences. By navigating international search engines and cultural nuances, we position your brand for success in the global digital landscape, optimizing your online presence for a wider audience.
                    </p>
                </div>


            </div>

            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>
                            Technical SEO
                        </h1>
                    </div>
                </div>
                <div>
                    <p>
                        Technical SEO constitutes the core of your website. Think of it as your website's infrastructure; without a secure technical SEO foundation, your website falls apart, and the remaining SEO efforts do not serve their purpose effectively. But this is no cause for concern. At Alta Vita, we address key issues affecting search engine crawling and indexing through tools like XML sitemaps and schema markups, improve your core web vitals, such as site speed and mobile responsiveness, and more.

                    </p>
                </div>


            </div>
            <div className='seo-audits '>
                <div className='d-flex'>
                    <div className='circle'>

                    </div>

                    <div>
                        <h1>
                            Content Marketing
                        </h1>
                    </div>
                </div>
                <div>
                    <p>
                        Content lies at the forefront of search engine optimization. This ties in to on-page SEO, where content such as homepage copy and blog articles should be optimized for better reach and ranking. Our team will analyze your website content and optimize it accordingly, focusing on keyword research and addition for improved search engine rankings and positioning your brand as a notable and authoritative voice within your industry.

                    </p>
                </div>


            </div>

            <Contact />
        </div>
    )

}
export default Services;