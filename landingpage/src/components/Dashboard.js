import React, { Component, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';
import mockup2 from '../assets/img/header.png';
import {Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import axios from 'axios';
// import i18n from "i18next";
// import {initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
// import '../flag-icon-css/css/flag-icon.min.css'


import about from '../assets/img/about.png';
import headerAction from '../assets/img/background.png';
import icon1 from '../assets/img/Brand.png';
import icon2 from '../assets/img/website.png';
import icon3 from '../assets/img/seo.png';
import icon4 from '../assets/img/smm.png';
import feature1 from '../assets/img/manage.png';
import feature2 from '../assets/img/powerful.png';
import feature3 from '../assets/img/design.png';


import News from "./News"

AOS.init({
  once: true,
});

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     supportedLngs: ['en', 'id'],
//     fallbackLng: "en",
//     detection: {
//       order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
//       caches: ['cookie'],
//       backend:{
//         loadPath: '/assets/locales/{{lng}}/translation.json',
//       }
//     }
//   });

//   const loadingMarkup = (
//     <div className="py-4 text-center">
//       <h3>Loading..</h3>
//     </div>
//   )
// // append app to dom
// ReactDOM.render(
//   <Suspense fallback={loadingMarkup}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Suspense>,
//   document.getElementById('root')
// )


// =========================================================
function Dashboard() {

  return (
    <div classNameName="App">

          {/* Header showcase */}
          <div className="position-relative Header">
            <img className="cover" src={mockup2} alt="" />
            <div className="position-absolute showcase-container">
              <div className="left-showcase">
                <h1 className="showcase-head">WE BUILD FUTURE</h1>
                <h2 className="showcase-title">NOT JUST TECH</h2>
            </div>
                <div className="position-absolute showcase-Button">
                <div className="text-center text-lg-start">
                <div className="form-group mt-4">
                <button type="button" className="btn text-white button-contact bg-danger" >Start Now</button>
              </div>
                  </div>
              </div>
            </div>
    </div>
    
    {/* < Profile > */}
    <div className="about">

<div className="container" data-aos="fade-up">
  <div className="row gx-0">

    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <h3>Who We Are</h3>
        <h2>Creative Digital Agency for Better World</h2>
        <p>
Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
        <div className="text-center text-lg-start">
          <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Learn More</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
      <div className="image">
    <img className="img-fluid" src={about} alt="" />
    </div>
    </div>
  </div>
</div>
{/* <--service--> */}
    <div className="service">
      <div className="title justify-content-center">
        <div className="text-center">
            <h5 className="text-info">Our Service</h5>
            <h1 className="text-black">WHAT WE DO</h1>
        </div>
    </div>
      <div className="content-service">
        <div className="d-flex flex-row">
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon1} alt="" />
              </div>
            </div>
            <div className="">
              <h5>Brand Strategic</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100"> 
          <div className="">
            <div className="icon d-flex justify-content-center align-items-center bg-info">
            <img className="" src={icon2} alt="" />
            </div>
            </div>
            <div className="">
              <h5>Web Development</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
          <div className="">
            <div className="icon d-flex justify-content-center align-items-center bg-danger">
            <img className="" src={icon2} alt="" />
            </div>
            </div>
            <div className="">
              <h5>Web Apps</h5>
              <p classname="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere.</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row w-100">
        <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon3} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SEO Optimization</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-info">
                <img className="" src={icon3} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SEO Optimization</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
          <div className="d-flex flex-row w-100">
            <div className="">
              <div className="icon d-flex justify-content-center align-items-center bg-danger">
                <img className="" src={icon4} alt="" />
              </div>
            </div>
            <div className="">
              <h5>SMM Marketing</h5>
              <p className="deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* -----background------ */}
<div className="position-relative Header">
            <img className="cover" src={headerAction} alt="" />
            <div className="position-absolute showcase-container">
            <div className="text-header">
            <h5 className="text-head">CALL TO ACTION</h5>
            <h2 className="text-title">NOT JUST TECH</h2>
            <p className="text-description">Aliquyam erat, sed diam voluptua. At vero eos et accusam et jus</p>
            </div>
            </div>
</div>

{/* ------Features-------- */}

<div className="features">
<div className="title justify-content-center">
        <div className="text-center">
            <h5 className="text-info">Our Features</h5>
            <h1 className="text-black">WHY CHOOSE US</h1>
            <p className="text-black">The purpose of lorem ipsum is to create a natural looking block of text that doesn'tdistract
from the layout laying out pages with meaningle</p>
        </div>
    </div>
  <div className="content-feature">
  <div className="d-flex flex-row justify-content-center">
          <div className="w-25">
            <div className="">
              <h5 className="text-center">Easily Managable</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature1} alt="" />
              </div>
            </div>
            </div>
            <div className="w-25">
            <div className="">
              <h5 className="text-center">Powerful Codes</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature2} alt="" />
              </div>
            </div>
            </div>
            <div className="w-25">
            <div className="">
              <h5 className="text-center">Clean Design</h5>
              <p className="text-center deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mollis posuere. </p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="icon d-flex justify-content-center align-items-center rounded-circle bg-info">
                <img className="" src={feature3} alt="" />
              </div>
            </div>
            </div>
  </div>
  </div>

  {/* ----latest news----- */}
  <News/>
</div>
</div>
</div>
  );
}
export default Dashboard;
