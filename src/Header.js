import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
function Header () {

  return (
    <div className='header'>
      <div className="header-img-container">

        <Link to='/'>
          <img className='header-image' src='./head.jpg' alt='head'>
          </img>
        </Link>
      </div>

      <div className='header-section'>

        <Link to='/' className='header-name'>EDDIE YEUNG</Link>

        <nav className='header-menu'>

        <Link to='/projects' className='header-menu-item header-menu-project'>PROJECTS</Link>

        <a className="header-menu-item header-menu-work" href="./eddieyeung.pdf" target="_blank">RESUME</a>

        <Link to='/contact' className='header-menu-item header-menu-contact'>CONTACT</Link>


      </nav>
      </div>

    </div>

  )
}

export default Header;