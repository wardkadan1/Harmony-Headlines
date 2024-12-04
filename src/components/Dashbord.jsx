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

        const allData = newsData.data.map(
          async (n, index) =>
            await fetch("http://localhost:3000/initial-mood", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: n.title,
                author: n.author,
                published_at: n.published_at,
                description: n.description,
                mood: moodData[index],
              }),
            })
        );

        console.log(allData);

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
