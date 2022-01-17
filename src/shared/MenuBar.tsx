import { Link } from 'react-router-dom';
import { toggleSlide } from '../scripts/toggleSlide';
import logo from '../assets/images/logo.png'

export default function MenuBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="qwerty" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/products" onClick={() => toggleSlide()}>
            PRODUKTER
          </Link>
        </li>

        <li>
          <Link to="/offices" onClick={() => toggleSlide()}>
            VÅRA SÄLJKONTOR
          </Link>
        </li>
        <li>
          <Link to="/career" onClick={() => toggleSlide()}>
            KARRIÄR
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => toggleSlide()}>
            NYHETER
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => toggleSlide()}>
            KONTAKTA OSS
          </Link>
        </li>
      </ul>
      <button onClick={() => toggleSlide()} className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
}
