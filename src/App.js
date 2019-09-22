import React, { useEffect } from 'react';
import './Style.scss'

import AOS from 'aos'
import $ from 'jquery'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'


const App = () => {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })

  handleBurger()

  useEffect(() => {
    handleNavbar()
  })

  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

const handleBurger = () => {
  $(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });
}

const handleNavbar = () => {
  let $about = $("#about").offset().top
  let $portfolio = $("#portfolio").offset().top
  let $contacts = $("#contacts").offset().top
  let $height = $("#about").outerHeight()
  let active = ''

  $(window).scroll(function() {
      if ($(this).scrollTop() >= $about && $(this).scrollTop() < $about + $height && active !== 'about') {
          // add
          $('#about-nav').addClass('is-active')
          // remove
          $('#portfolio-nav').removeClass('is-active')
          $('#contacts-nav').removeClass('is-active')
          // $('#navbar').removeClass('hidden')
          
          active = 'about'
      } else if ($(this).scrollTop() >= $portfolio && $(this).scrollTop() < $portfolio + $height && active !== 'portfolio') {
          // add
          $('#portfolio-nav').addClass('is-active')
          // remove
          $('#about-nav').removeClass('is-active')
          $('#contacts-nav').removeClass('is-active')
          // $('#navbar').removeClass('hidden')
          
          active = 'portfolio'
      } else if ($(this).scrollTop() >= $contacts && active !== 'contacts') {
          // add
          $('#contacts-nav').addClass('is-active')
          // remove
          $('#about-nav').removeClass('is-active')
          $('#portfolio-nav').removeClass('is-active')
          // $('#navbar').removeClass('hidden')
          
          active = 'contacts'
      } else if ($(this).scrollTop() < $about && active !== '') {
          // $('#navbar').addClass('hidden')
          active = ''
      }
      
      // Handle navbar
      if ($(this).scrollTop() > $about - 50) {
          $('#navbar').removeClass('hidden')
      } else {
          $('#navbar').addClass('hidden')
      }
  });
}

export default App;
