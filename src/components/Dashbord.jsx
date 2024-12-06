/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import New from "./../components/New";
import "./dashbord.css";
import { getNews, processTitleMood } from "./data";

export async function dashbordLoder() {
  try {
    const newsData = await getNews();

    const titles = newsData.data.map((n) => n.title);
    const moodData = await processTitleMood(titles);

    const allData = newsData.data.map((n, index) => ({
      id: index,
      title: n.title,
      image: n.image,
      author: n.author,
      published_at: n.published_at,
      description: n.description,
      mood: moodData[index],
    }));

    await fetch("https://harmony-headlines-backend.onrender.com/initial-mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ allData }),
    });

    console.log(allData);
    return allData;
  } catch (err) {
    console.error("Error in fetching or processing news:", err);
  }
}

export default function Dashbord() {
  const news = useLoaderData();
  return (
    <div className="list-page">
      {news.map((article, index) => (
        <New key={index} news={article} id={index} />
      ))}
    </div>
  );
}
