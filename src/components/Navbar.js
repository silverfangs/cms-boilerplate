import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Postivmind" style={{ width: '11rem', maxHeight: 'initial' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/support">
          Support us
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
