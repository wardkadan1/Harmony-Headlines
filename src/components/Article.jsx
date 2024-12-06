import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./article.css";
import { changeMood } from "./data";
import { useUser } from "@clerk/clerk-react";

export default function Article() {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [newN, setNewn] = useState([]);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const userData = useUser();
  const isAdmin = userData.user?.publicMetadata.role === "admin";

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://harmony-headlines-backend.onrender.com/data/${id}`
        );
        const result = await response.json();
        setNews(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

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
              mood {newN?.mood || news[id].mood}
            </label>
            {isAdmin && (
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
            )}
          </section>
        </section>

        <section className="btn-sec">
          {isAdmin && (
            <button className="btn-article" type="submit" onClick={updateBtn}>
              Update
            </button>
          )}
          <button className="btn-article" type="submit" onClick={backBtn}>
            Back
          </button>
        </section>
      </section>
    </div>
  );
}
