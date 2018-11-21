import React from 'react'
import Link from 'gatsby-link'

import convoke from '../components/photos/Convoke.jpg'
import region20 from '../components/photos/Region20.jpg'
import budgetUs from '../components/photos/BudgetUs.jpg'
import dad from '../components/photos/dad-portfolio.jpg'
import breakingBad from '../components/photos/breakingbadapi.jpg'
import flex from '../components/photos/flex.jpg'

const arr = [
  {
    title: 'Convoke',
    img: convoke,
    link: 'https://www.convokegroups.com/',
    url: 'convokegroups.com',
    description: `An application designed to bring people together to socialize through common interests. **Voted Best Overall Project**`,
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
    img: budgetUs,
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
      'Cypress',
      'Auth0',
      'Chart.js',
      'Moment',
    ],
  },
  {
    title: 'Deron Biles',
    img: dad,
    link: 'https://www.deronjbiles.com/',
    url: 'deronjbiles.com',
    description:
      'A personal portfolio built for a professor, minister, and public speaker.',
    frameworks: [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'PostrgresSQL',
      'MassiveJS: Inline SQL',
      'Nodemailer',
      'Moment',
    ],
  },
  {
    title: 'The Breaking Bad API',
    img: breakingBad,
    link: 'https://www.breakingbadapi.com/',
    url: 'breakingbadapi.com',
    description:
      'This site serves as a documentation for a custom API on the AMC television series, Breaking Bad.',
    frameworks: [
      'Javascript',
      'React',
      'Redux',
      'Node',
      'Express',
      'PostrgresSQL',
      'Styled Components',
      'Custom API endpoints',
    ],
  },
  {
    title: 'CSS Flex Mex',
    img: flex,
    link: 'https://cssflexmex.netlify.com/',
    url: 'cssflexmex.netlify.com',
    description:
      'CSS Flex Mex is a tool designed to help developers understand the CSS display properties flex and grid.',
    frameworks: [
      'Javascript',
      'React',
      'Styled Components',
      'Custom modal',
      'Css code generator'
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
          <img className="back_flip_img" src={e.img} alt="Portfolio cover" />
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
      <p>A catalog of recent freelance and personal projects.</p>
    </div>

    <div className="portfolio_container container2">{map}</div>
  </div>
)

export default Portfolio
