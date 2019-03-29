import React from 'react'

import Icon from '../components/icons/icons'
import '../styles/about.css'


const About = () => (
      <div className="about_main">
        <div className="about_container">
          <h1>About</h1>
          <img className="profile_img" src='https://res.cloudinary.com/dwvrok1le/image/upload/v1547827962/tim.jpg' alt="Tim photo" />
          <p className="about_name">I'm Tim!</p>
          <p>
            I am Front-end React developer for CrateBind in Dallas, TX. I have a particular
            interest in UX/UI design, and enjoy the challenge of learning a new
            program or framework. My background prior to web development was in
            music education, where I established a strong work ethic and clear
            understanding of discipline that is well suited for the field of
            programming.
          </p>
          <p>
            I am a husband, father, drummer, runner, board-game player,
            TV-enthusiast, and coffee lover.
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

export default About
