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
      'An application designed to bring people together to socialize through common interests',
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
    description: 'A portfolio application built for a professor and minister.',
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
      <h1 className="port_title">{e.title}</h1>
      <div className='img_holder'>
        <img className="portfolio_img" src={e.img} alt={e.title} />
        <div className='hidden_mag'>

        <img className='magnifying_glass' src="https://image.flaticon.com/icons/svg/149/149852.svg" alt=""/>
        </div>
      </div>
      <a href={e.link}>
        <p className="port_map_link">{e.url}</p>
      </a>
      <p className="port_des">{e.description}</p>
      <div className="port_map_sub">
        {e.frameworks.map((el, i) => (
          <p className="packages_map" key={i}>
            {el}
          </p>
        ))}
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
  </div>
)

export default Portfolio
