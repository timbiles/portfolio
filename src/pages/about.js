import React, { Component } from 'react'
import Link from 'gatsby-link'

import QuoteGenerator from '../components/QuoteGenerator/QuoteGenerator'
import Icon from '../components/icons/icons'
import photo from '../components/photos/tim.jpg'

class About extends Component {
  render() {
    return (
      <div className="about_main">
        <div className="about_container">
        <img className='profile_img'src={photo} alt="Tim photo"/>
          <h1>About</h1>
          <p className="about_name">I'm Tim!</p>
          <p>
            I'm a full stack, javascript developer in the Dallas/Fort Worth
            area, with a passion for front-end development. I have a particular
            interest in UX/UI design, and enjoy the challenge of learning a new
            program or framework. My background prior to web development was in
            music education, where I established a strong work ethic and clear
            understanding of discipline that is well suited for the field of
            programming.
          </p>
          <p>
            I am a husband, father, drummer, board-game player, TV-enthusiast,
            and coffee lover.{' '}
          </p>
          <p>
            If you are in need of a specific project, send me a message and we
            can get started!
          </p>
        </div>
        <div className="about_sub_container">
          <h1>Skills</h1>
          <Icon />
        </div>
      </div>
    )
  }
}

export default About
