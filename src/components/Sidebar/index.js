import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoS from '../../assests/images/k-logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" /> 
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4d" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kemale-shamilova-57675018a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/kmlbss">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/shamilovakamala"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@shamilovakemale"
          >
            <FontAwesomeIcon icon={faMedium} color="#4d4d4d" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
