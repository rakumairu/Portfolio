import React from 'react'

import $ from 'jquery'


const Contacts = () => {

  const toTop = e => {
    e.preventDefault()
    $([document.documentElement, document.body]).animate({
        scrollTop: $('body').offset().top
    }, 1000)
  }

  return (
    <>
      <section id="contacts" className="hero is-light is-fullheight is-bold" style={{ paddingTop: '2.25rem' }}>
        <div className="hero-body">
          <div className="container" style={{ alignSelf: 'flex-start' }}>
            <h1 
              className="has-text-centered title is-4 main-title is-uppercase has-text-weight-bold" 
              data-aos="flip-up"
            >Contacts</h1>
            <div className="columns">
              <div className="column">
                <h1>This is content 1</h1>
              </div>
              <div className="column">
                <h1>This is content 2</h1>
              </div>
            </div>
            <h1>Coba</h1>
          </div>
        </div>
      </section>

      <section className="hero is-dark is-bold">
        <div className="hero-foot">
          <div className="container has-text-centered" style={{ marginBottom: '12px' }}>
            <button
              className="button is-primary"
              style={{ marginBottom: '12px', marginTop: '-12px' }}
              onClick={ toTop }
            >
              <span className="icon">
                <i className="fas fa-angle-up"></i>
              </span>
            </button>

            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <a
                  href="https://www.linkedin.com/in/demaspira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-dark is-large with-border"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  href="https://github.com/rakumairu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-dark is-large with-border"
                >
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  href="https://www.instagram.com/demas_dd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-dark is-large with-border"
                >
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>
                </a>
              </p>

              <p className="control">
                <a
                  href="https://drive.google.com/file/d/1II8gIjsCyxqqVgDDjAMnY7T5uQLbCBIV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-dark is-large with-border"
                >
                  <span className="icon">
                    <i className="fab fa-line"></i>
                  </span>
                </a>
              </p>
            </div>

            <p className="has-text centered has-text-grey is-7"><span className="has-text-primary"> Demaspira Aulia</span> &copy;2019</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts