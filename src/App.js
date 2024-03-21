import {
  BrowserRouter as Router, Routes
  , Route
} from "react-router-dom";
// import ComingSoon from 'react-coming-soon'

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
        {/* <Route path='/' element={<Home />} /> */}

        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/services' element={<MainServices />} />

        <Route path='/services1' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/call' element={<Call />} />
        <Route path="/" element={<Home />} />





        <Route exact path="/" element={<Home />}>

          {/* <Redirect to="/home" /> */}
        </Route>
      </Routes>
    </Router>

    // </div>
  );
}


export default App;
