import React from 'react'
import Link from 'gatsby-link'

import convoke from '../components/photos/Convoke.jpg'
import region20 from '../components/photos/Region20.jpg'
import BudgetUs from '../components/photos/BudgetUs.jpg'
import dad from '../components/photos/dad-portfolio.jpg'

const arr = [
  {
    title: 'Convoke',
    img: convoke,
    link: 'http://www.convokegroups.com/',
    url: 'convokegroups.com',
    description:
      `An application designed to bring people together to socialize through common interests. **Voted Best Overall Project**`,
    frameworks: [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'PostrgresSQL',
      'Twilio',
      'Nodemailer',
      'Google Maps API',
      'Open Weather API',
      'Lodash',
    ],
  },
  {
    title: 'BudgetUs',
    img: BudgetUs,
    link: 'http://www.budgetus.online',
    url: 'budgetus.online',
    description:
      'An application structured to balance personal income and expenses. This was a team project.',
    frameworks: [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'PostrgresSQL',
      'Charts.js',
      'Moment',
    ],
  },
  {
    title: 'Deron Biles',
    img: dad,
    link: 'http://204.48.21.195:8081/',
    url: 'deronjbiles.com',
    description: 'A personal portfolio built for a professor, minister, and public speaker.',
    frameworks: [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'PostrgresSQL',
      'Nodemailer',
      'Moment',
    ],
  },
]

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
            <a href={e.link}>
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
          <img className='back_flip_img' src={e.img} alt="Portfolio cover"/>
        </div>
      </div>
    </div>
  )
})

const mapper = arr.map((e, i) => {
  return (
    <div key={i} className="vertical_map">
      <div className="portfolio_subb">
        <h1 className="vertical_title">{e.title}</h1>
        <img src={e.img} alt="image" />

        <div className="hidden_info">
          <div className="e_holder">
            <a href={e.link}>
              <p className="port_map_link">{e.url}</p>
            </a>
          </div>
          <p className="port_des">{e.description}</p>
          <div className="port_map_sub">
            {e.frameworks.map((el, i) => (
              <p className="packages_map" key={i}>
                {el}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
})

const Portfolio = () => (
  <div className="portfolio_main">
    <div className="portfolio_container">
      <h1>Portfolio</h1>
      <p>
        Here are some of the projecsts I have done, both personal and
        professional.
      </p>
    </div>

    <div className="portfolio_container container2">
      <div>{map}</div>
    </div>

    {/* <div className="test_container">{mapper}</div> */}
  </div>
)

export default Portfolio
