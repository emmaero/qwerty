import {
  convertToMonthDayText,
  convertToYearText,
} from "../scripts/stringDateConverter";

type news = {
  title: string;
  date: string;
  description: string;
};
interface iProp {
  item: news;
}
export default function NewsCard({ item }: iProp) {
  const { title, date, description } = item;
  return (
    <article className="news-card">
      <div className="date-info">
        <p>{convertToMonthDayText(date)}</p>
        <p>{convertToYearText(date)}</p>
      </div>
      <div className="news-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="button-link">Read more</button>
      </div>
    </article>
  );
}
