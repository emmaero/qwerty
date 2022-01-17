import list from "../data/offices.json";
import OfficeCard from "./OfficeCard";

export default function Offices() {
  const offices = list.map((item) => <OfficeCard key={item.id} item={item} />);
  return (
    <main>
      <section className="top-section">
        <article className="top-content">
          <h1>Our sells offices</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            a, lacus at sodales in. Tempus sit diam dui at ante amet. Ut donec
            mi feugiat et pellentesque tempus amet mauris. Posuere leo pharetra,
            tempus nunc, enim, sit leo amet.
          </p>
        </article>
      </section>
      <section className="general-section">
        <div className="offices">{offices}</div>
      </section>
    </main>
  );
}
