import React from 'react'
import '../styles/portfolio.css'

import { arr } from '../utils/data/portfolio'

const map = arr.map((e, i) => {
  return (
    <div className="port_map" key={i}>
      <div className="flipper">
        <div className="front_flip">
          <h1 className="port_title">{e.title}</h1>
          <div className="img_holder">
            <img className="portfolio_img" src={e.img} alt={e.title} />
            <div className="hidden_mag">
              <img
                className="magnifying_glass"
                src="https://image.flaticon.com/icons/svg/149/149852.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="back_flip">
          <h1 className="port_title back_title">{e.title}</h1>
          <div className="e_holder">
            <a href={e.link} target='blank'>
              <p className="port_map_link">{e.url}</p>
            </a>
            <p className="email_line">|</p>
          </div>
          <p className="port_des">{e.description}</p>
          <div className="port_map_sub">
            {e.frameworks.map((el, i) => (
              <p className="packages_map" key={i}>
                {el}
              </p>
            ))}
          </div>
          <img className="back_flip_img" src={e.img} alt="Portfolio cover" />
        </div>
      </div>
    </div>
  )
})

const Portfolio = () => (
  <div className="portfolio_main">
    <div className="portfolio_container">
      <h1>Portfolio</h1>
      <p>A catalog of recent freelance and personal projects.</p>
    </div>

    <div className="portfolio_container container2">{map}</div>
  </div>
)

export default Portfolio
