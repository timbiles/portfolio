import React from 'react'
import Link from 'gatsby-link'

import convoke from '../components/photos/convoke.jpg'
import region20 from '../components/photos/Region20.jpg'
import dad from '../components/photos/dad-portfolio.jpg'

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
      <div className='port_sub_container'>
        <a href="http://www.convokegroups.com/" target="blank">
          <img className="portfolio_img" src={convoke} alt="Convoke.com" />
        </a>
        <div className='port_hidden'>
          <h2>Convoke</h2>
        </div>
      </div>
      <div className='port_sub_container'>
        <a href="http://www.convokegroups.com/" target="blank">
          <img className="portfolio_img" src={region20} alt="Convoke.com" />
        </a>
        <div className='port_hidden'>
          <h2>Region 20</h2>
        </div>
      </div>
      <div className='port_sub_container'>
        <a href="http://204.48.21.195:8081/" target="blank">
          <img className="portfolio_img" src={dad} alt="DeronBiles.com" />
        </a>
        <div className='port_hidden'>
          <h2>Deron Biles</h2>
        </div>
      </div>

    </div>
  </div>
)

export default Portfolio
