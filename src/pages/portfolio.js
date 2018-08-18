import React from 'react'
import Link from 'gatsby-link'

import convoke from '../components/photos/convoke.jpg'

const Portfolio = () => (
  <div className="about_main">
    <div className="portfolio_container">
      <h1>Portfolio</h1>
      <p>
        Here are some of the projecsts I have done, both personal and
        professional.
      </p>
    </div>
    <div className="portfolio_container">
      <div>
        <a href="http://www.convokegroups.com/" target="blank">
          <img className="portfolio_img" src={convoke} alt="Convoke.com" />
        </a>
      </div>
      <div />
    </div>
  </div>
)

export default Portfolio
