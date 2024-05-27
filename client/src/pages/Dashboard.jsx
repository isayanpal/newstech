import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

function Dashboard() {
  const [articles, setArticles] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tech-headlines`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching the tech headlines:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Headlines</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.slice(0, 12).map((item, index) => (
          <NewsCard key={index} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
