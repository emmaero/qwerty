import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.png";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-links">
        <li>
          <Link to="/products">PRODUKTER</Link>
        </li>

        <li>
          <Link to="/offices">VÅRA SÄLJKONTOR</Link>
        </li>
        <li>
          <Link to="/career">KARRIÄR</Link>
        </li>
        <li>
          <Link to="/news">NYHETER</Link>
        </li>
        <li>
          <Link to="/contact">KONTAKTA OSS</Link>
        </li>
      </ul>
      <div className="footer-below">
        <div>
          <a href="#">
            <img src={logo} alt="Qwerty" />
          </a>
        </div>
        <p>070 XX XX XX XX</p>
        <address>Andersbergsringen 41 | 30221 | Halmstad</address>
      </div>
      <div className="footer-icons-bar">
        <div className="icons">
          <a href="www.facebook.com">
            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
          </a>
          <a href="www.instagram.com">
            <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
          </a>
          <a href="www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="www.twitter.com">
            <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </footer>
  );
}
