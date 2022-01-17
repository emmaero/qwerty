import { Link } from "react-router-dom";
import list from "../data/products.json";
import ProductCard from "./ProductCard";

export default function Products() {
  const products = list.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      description={product.description}
      imageUrl={product?.imageUrl}
    />
  ));
  return (
    <div>
      <div className="top-image">
        <div className="top-image-content">
          <div className="intro-box">
            <h1>Produkter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim
            </p>
            <Link to="/products" className="button-secondary">
              View products
            </Link>
          </div>
        </div>
      </div>
      <section className="general-section">
        <div className="products">{products}</div>
      </section>
    </div>
  );
}
