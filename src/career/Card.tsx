
type job = {
  position: string;
  date: string;
  description: string;
};
interface iProp {
  item: job;
}
export default function Card({ item }: iProp) {
  const { position, date, description } = item;
  return (
    <article className="job-card">
      <h3>{position}</h3>
      <h3>
        <small>{date}</small>
      </h3>
      <p>{description}</p>
      <button className="button-main">Apply</button>
    </article>
  );
}
