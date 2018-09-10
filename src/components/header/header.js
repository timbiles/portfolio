import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = () => (
  <div className="header">
    <div className="header_right">
      <h1 className="header_title">
        <Link to="/" className="header_title big_title">
          TB
        </Link>
      </h1>
      <div className="header_hidden">
        <h3>| Tim Biles</h3>
        
      </div>
    </div>
    <div className="header_left">
      <Link className="header_title" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="header_title" to="/portfolio">
        <h2>Portfolio</h2>
      </Link>

      <Link className="header_title" to="/contact">
        <h2>Contact</h2>
      </Link>
    </div>
  </div>
)

export default Header
