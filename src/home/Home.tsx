import { Link } from "react-router-dom";
import sectionImage from "../assets/images/semi-complete.jpg";
export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-content">
          <div className="intro-box">
            <h1>QWERTY</h1>
            <p>Work safe , less worry and work more</p>
            <Link to="/products" className="button-secondary">
              View products
            </Link>
          </div>
        </div>
      </div>
      <section className="general-section">
        <div className="container two-column">
          <div className="container-item">
            <h2>QWERTY</h2>
            <p>
              QWERTY AB ett internationellt företag som levererar nyckelfärdiga
              system till industrin med säte i Halmstad och säljkontor i
              Danmark, Norge, Indien, Thailand och USA
            </p>
          </div>
          <div className="container-item">
            <img src={sectionImage} alt="qwerty" />
          </div>
        </div>
      </section>
    </main>
  );
}
