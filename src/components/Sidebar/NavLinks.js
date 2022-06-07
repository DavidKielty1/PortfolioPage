import React from 'react'
import './sidebar.scss'

import { NavLink } from 'react-router-dom'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FolderOpenOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavLinks() {
  return (
    <nav>
      <NavLink exact="true" activeactiveclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#c4c4c4" />
      </NavLink>
      <NavLink
        exact="true"
        activeactiveclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#c4c4c4" />
      </NavLink>
      <NavLink
        exact="true"
        activeactiveclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FolderOpenOutlined color="4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeactiveclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#c4c4c4" />
      </NavLink>
    </nav>
  )
}

export default NavLinks
