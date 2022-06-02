import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import D1 from '../../assets/images/d1.png'
import SubLogo from '../../assets/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FolderOpenOutlined } from '@ant-design/icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={D1} alt="logo" />
        <img className="sub-logo" src={SubLogo} alt="slobodan" />
      </Link>
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
  )
}

export default Sidebar
