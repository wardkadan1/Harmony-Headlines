/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import New from "./../components/New";
import "./dashbord.css";
import { getScoredNews } from "./data";

export async function dashbordLoder() {
  try {
    return await getScoredNews();
  } catch (err) {
    console.error("Error in fetching or processing news:", err);
    return [];
  }
}

export default function Dashbord() {
  const news = useLoaderData();
  return (
    <div className="list-page">
      {news.length === 0 && (
        <p className="empty-state">News is unavailable right now. Please try again later.</p>
      )}
      {news.map((article) => (
        <New key={article.id} news={article} id={article.id} />
      ))}
    </div>
  );
}
