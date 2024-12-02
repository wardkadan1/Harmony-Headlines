/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./article.css";
import { changeMood } from "./data";

export default function Article({ news, mood }) {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [newN, setNewn] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const updateBtn = async () => {
    try {
      const newsData = await changeMood(news[id], value);
      setNewn(newsData);
    } catch (err) {
      console.error("Error in fetching or processing news:", err);
    }
  };

  const backBtn = () => {
    navigate(`/`);
  };

  return (
    <div className="article-page">
      <section className="box-article">
        <section className="top-sec">
          <section className="image-article">
            <img src={news[id].image} alt="" />
          </section>
          <section className="text-section">
            <h1>{newN?.title || news[id].title}</h1>
            <label className="lable-article">
              {newN?.description || news[id].description}
            </label>
            <label className="lable-article">{news[id].author}</label>
            <label className="lable-article">{news[id].published_at}</label>
            <label className="lable-article">
              mood {newN?.mood || mood[id]}
            </label>
            <section className="slider-class">
              <label className="slider-value">Choose mood</label>
              <div className="div-class">
                <span className="slider-value">{value} </span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={value}
                  onChange={handleChange}
                  className="slider"
                />
              </div>
            </section>
          </section>
        </section>

        <section className="btn-sec">
          <button className="btn-article" type="submit" onClick={updateBtn}>
            Update
          </button>
          <button className="btn-article" type="submit" onClick={backBtn}>
            Back
          </button>
        </section>
      </section>
    </div>
  );
}
