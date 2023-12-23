import {
  BrowserRouter as Router, Routes
  , Route
} from "react-router-dom";
import React, { useState } from "react";
import Aboutus from "./pages/AboutUs.js"
import Home from "./pages/Home.js"
import Whatwedo from "./pages/What-we-do/Whatwedo.js"
import MainServices from "./pages/mainServices.js"

import Services from "./pages/Services.js"
import Blog from "./pages/Blog.js"
import Call from "./pages/Call.js"
import './App.css';

function App() {

  return (


    <Router>

      <Routes>
        {/* <Route path='/Home' element={<Home />} /> */}
        <Route path='/home' element={<Home />} />

        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/services' element={<MainServices />} />

        <Route path='/services1' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/call' element={<Call />} />
        <Route  path="/home" element={<Home />}/>

        {/* <Route path='/Blog' element={<Blog />} />
        <Route path='/ContentServices' element={<ContentServices />} />
        <Route path='/SeoServices' element={<SeoServices />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/blog-posts' element={<Blogposts />} />
        <Route path='/brand-jurnalism' element={<Brandjurnalism />} />
        <Route path='/technical-writing' element={<Technical />} />
        <Route path='/email-writing' element={<Email />} />
        <Route path='/script-writing' element={<Script />} />
        <Route path='/copy-writing' element={<Copy />} />
        <Route path='/general-writing' element={<General />} />
        <Route path='/seo-audit' element={<Seo />} />
        <Route path='/seo-consulting' element={<SeoCons />} />
        <Route path='/on-page-seo' element={<Onpage />} />
        <Route path='/off-page-seo' element={<Offpage />} />
        <Route path='/international-seo' element={<InterSeo />} />
        <Route path='/e-comerce-seo' element={<Ecomerce />} />
        <Route path='/local-seo' element={<Local />} />
        <Route path='/the-truth-about-content-and-seo-in-armenia' element={<TheTruth />} />
        <Route path='/seo-in-blogs/blog-post' element={<TheImportance />} /> */}



        <Route exact path="/" element={<Home />}>

          {/* <Redirect to="/home" /> */}
        </Route>
      </Routes>
    </Router>
    // </div>
  );
}


export default App;
