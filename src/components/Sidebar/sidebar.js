import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './sidebar.scss'
import D1 from '../../assets/images/d1.png'
import SubLogo from '../../assets/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FolderOpenOutlined } from '@ant-design/icons'

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const mobileHandler = () => {
    if (menuActive === true) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }

  const menuClasses = `navbar-toggle ${menuActive ? 'is-active' : ''}`

  const navClasses = `${menuActive ? 'active' : ''}`

  return (
    <div className="nav-bar">
      <div className="logodiv">
        <Link className="logo" to="/">
          <img src={D1} alt="logo" />
          <img className="sub-logo" src={SubLogo} alt="slobodan" />
        </Link>
      </div>
      <nav className={navClasses}>
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
      <div className="uldiv">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/d%C3%A1ith%C3%AD-%C3%B3-caoilte-53256948/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#c4c4c4" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DavidKielty1"
            >
              <FontAwesomeIcon icon={faGithub} color="#c4c4c4" />
            </a>
          </li>
        </ul>
      </div>
      <div onClick={mobileHandler} className={menuClasses} id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  )
}

export default Sidebar
