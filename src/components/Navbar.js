import React from 'react'

import $ from 'jquery'


const Navbar = () => {

  const toAbout = e => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
    }, 1000)
  }

  const toPortfolio = e => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000)
  }

  const toContacts = e => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#contacts").offset().top
    }, 1000)
  }

  return (
    <nav
      id="navbar"
      className="navbar is-fixed-top is-primary is-active"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      data-aos="fade-in"
      data-aos-once="false"
      data-aos-anchor="#portfolio"
      data-aos-offset="-51"
      data-aos-duration="700"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="nav-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="nav-menu" className="navbar-menu">
          <div className="navbar-end">
            {/* eslint-disable-next-line */}
            <a 
              id="about-nav" 
              className="navbar-item"
              onClick={ toAbout }
            >About</a>
            {/* eslint-disable-next-line */}
            <a 
              id="portfolio-nav" 
              className="navbar-item"
              onClick={ toPortfolio }
            >Portfolio</a>
            {/* eslint-disable-next-line */}
            <a 
              id="contacts-nav" 
              className="navbar-item"
              onClick={ toContacts }
            >Contacts</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar