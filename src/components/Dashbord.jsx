/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import New from "./../components/New";
import "./dashbord.css";
import { getNews, processTitleMood } from "./data";
import { useEffect } from "react";

export default function Dashbord({ news, setNews, mood, setMood }) {
  useEffect(() => {
    const fetchAndProcessNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData.data);

        const titles = newsData.data.map((n) => n.title);
        const moodData = await processTitleMood(titles);
        setMood(moodData);
      } catch (err) {
        console.error("Error in fetching or processing news:", err);
      }
    };

    fetchAndProcessNews();
  }, []);

  return (
    <div className="list-page">
      {news.map((article, index) => (
        <New key={index} news={article} id={index} mood={mood[index]} />
      ))}
    </div>
  );
}
