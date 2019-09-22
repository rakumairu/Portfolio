import React from 'react'


const About = () => (
  <section id="about" className="hero is-light is-fullheight is-bold" style={ {paddingTop: '2.25rem'} }>
    <div className="hero-body">
      <div className="container" style={ {alignSelf: 'flex-start'} }>
        <h1 
          className="has-text-centered title is-4 main-title is-uppercase has-text-weight-bold" 
          data-aos="flip-up"
        >About</h1>
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
)

export default About