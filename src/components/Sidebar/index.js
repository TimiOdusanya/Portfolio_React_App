import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from "../../assets/images/logo-t.png"
import LogoSubtitile from "../../assets/images/logo_sub1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar(){
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitile} alt="timi" />
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/timi-odusanya/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TimiOdusanya"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/timi-odusanya/"
            >
              <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    )
}