import React from 'react'

import $ from 'jquery'


const Welcome = () => {

  // Scrolling down to About
  const scrollDown = e => {
    e.preventDefault()

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  }

  return (
    <section className="hero is-dark is-fullheight is-bold">
      <div
        id="welcome"
        className="hero-body"
        data-aos="fade-in"
        data-aos-duration="1250"
      >
        <div className="container has-text-centered single-spaced">
          <h1 className="subtitle">Hello, I'm <span className="title has-text-primary">Demaspira Aulia</span></h1>
          <h1 className="subtitle">A computer science fresh graduate</h1>
          <button
            className="button is-primary is-outlined is-rounded"
            type="button"
            id="scroll"
            onClick={ scrollDown }
          >Learn more</button>
        </div>
      </div>
      <div
        className="hero-foot made-with-bulma has-text-right"
        data-aos="fade-right"
        data-aos-duration="1250"
        data-aos-once="false"
        data-aos-offset="0"
        style={ {marginRight: '12px'} }
      >
        <a
          href="https://bulma.io"
          className="made-with-bulma is-inline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="navbar-end is-inline"
            src="https://bulma.io/images/made-with-bulma--white.png"
            alt="Made with Bulma"
            width="128"
            height="24"
          />
        </a>

        <a
          href="https://reactjs.org"
          className="made-with-bulma has-text-light is-inline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-react" style={ {height: '24px', width: '24px'} }></i>
        </a>
      </div>
    </section>
  )
}

export default Welcome