import React from 'react'
import Link from 'gatsby-link'

import ContactIcons from '../components/icons/contact';
import '../styles/index.css'

const IndexPage = () => (
  <div className="main_container">
    <div className="main_sub">
      <div className="main_title1">
        <h1 className="main_text">Tim Biles</h1>
        <img
          className="index_img"
          src="https://image.flaticon.com/icons/svg/587/587376.svg"
          alt=""
        />
      </div>
      <h3 className="main_sub_text">Web Developer</h3>
    </div>
    
      <ContactIcons/>

  </div>
)

export default IndexPage
