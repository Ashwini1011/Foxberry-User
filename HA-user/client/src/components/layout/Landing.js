import React from 'react'
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
        <h1 class="x-large">Savitri Foundation</h1>
          <p class="lead">
           ...Help us to educate India better.
          </p>
          <p >
          The light is meaningless without eyes.Though we share the same land, same river, same earth
            we are unable to share same quality of education.
          </p >
          <p >To make the light of education meaningful,give us a helping hand so that we can provide more education to poor children.</p>
          
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Landing;
