import list from "../data/jobs.json";
import Card from "./Card";
export default function Career() {
  var sorted_jobs = list
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();
  const jobs = sorted_jobs.map((item) => <Card key={item.id} item={item} />);
  return (
    <main>
      <section className="top-section">
        <article className="top-content">
          <h1>Job vacancies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            a, lacus at sodales in. Tempus sit diam dui at ante amet. Ut donec
            mi feugiat et pellentesque tempus amet mauris. Posuere leo pharetra,
            tempus nunc, enim, sit leo amet.
          </p>
        </article>
      </section>
      <section className="general-section">
        <div className="career">{jobs}</div>
      </section>
    </main>
  );
}
