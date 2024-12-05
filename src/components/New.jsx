/* eslint-disable react/prop-types */
import "./news.css";
import { useNavigate } from "react-router-dom";

export default function New({ news, id }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/article/${id}`);
  };
  return (
    <div className="container">
      <a className="box" onClick={onClick}>
        <section className="image">
          <img src={news.image} alt="" />
        </section>
        <section className="text">
          <h1>{news.title}</h1>
          <label>{news.author}</label>
          <label>{news.published_at}</label>
          <label>mood {news.mood}</label>
        </section>
      </a>
    </div>
  );
}
