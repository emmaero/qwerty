import list from "../data/news.json";
import NewsCard from "./NewsCard";

export default function News() {
  var sorted_jobs = list
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();
  const news = sorted_jobs.map((item) => (
    <NewsCard key={item.id} item={item} />
  ));
  return (
    <main>
      <section className="top-section">
        <article className="top-content">
          <h1>Lastest news</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            a, lacus at sodales in. Tempus sit diam dui at ante amet. Ut donec
            mi feugiat et pellentesque tempus amet mauris. Posuere leo pharetra,
            tempus nunc, enim, sit leo amet.
          </p>
        </article>
      </section>
      <section className="general-section news-section">
        <div className="news">{news}</div>
      </section>
      <div className="general-section">
        <div className="archive-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam amet,
            sapien sapien semper sed aliquam quis pretium imperdiet. In quisque
            vitae non tristique rhoncus arcu, eget. Ultricies at in sit in neque
            in et velit ac.
          </p>
          <button className="button-main">News archive</button>
        </div>
      </div>
    </main>
  );
}
