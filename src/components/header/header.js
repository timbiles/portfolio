import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const links = [
  'About', 'Portfolio', 'Contact'
]

const map = links.map((e, i) => {
  return <Link 
  key={i}
  className='header_title' to={`/${e}`}>
  <h2>{e}</h2>
</Link>
})

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
    {map}
    </div>
  </div>
)

export default Header
