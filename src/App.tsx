import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Offices from "./offices/Offices";
import Products from "./products/Products";
import Footer from "./shared/Footer";
import MenuBar from "./shared/MenuBar";
import "./styles/style.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route
            path="/products"
            caseSensitive={false}
            element={<Products />}
          />
          <Route path="/offices" caseSensitive={false} element={<Offices />} />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
