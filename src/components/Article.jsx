import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./article.css";
import { changeMood } from "./data";
import { useUser } from "@clerk/clerk-react";

export default function Article() {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [newN, setNewn] = useState(null);
  const [neW, setNews] = useState(null);
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
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

        setNews(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const updateBtn = async () => {
    if (neW) {
      try {
        const updatedNews = await changeMood(neW, value);
        setNewn(updatedNews);
      } catch (err) {
        console.error("Error in fetching or processing news:", err);
      }
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
            <img src={neW?.image} alt="News" />
          </section>
          <section className="text-section">
            <h1>{newN?.title || neW?.title}</h1>
            <label className="lable-article">
              {newN?.description || neW?.description}
            </label>
            <label className="lable-article">{neW?.author}</label>
            <label className="lable-article">{neW?.published_at}</label>
            <label className="lable-article">
              Mood: {newN?.mood || neW?.mood}
            </label>
            {isAdmin && (
              <section className="slider-class">
                <label className="slider-value">Choose mood</label>
                <div className="div-class">
                  <span className="slider-value">{value}</span>
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
            <button className="btn-article" type="button" onClick={updateBtn}>
              Update
            </button>
          )}
          <button className="btn-article" type="button" onClick={backBtn}>
            Back
          </button>
        </section>
      </section>
    </div>
  );
}
