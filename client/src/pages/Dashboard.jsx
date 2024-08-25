import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Loader from "../components/loader/Loader";

function Dashboard() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchArticles = async () => {
    const response = await axios.get(`${API_BASE_URL}/tech-headlines`);
    return response.data;
  };

  const {
    data: articles = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["newsData"],
    queryFn: fetchArticles,
  });

  if (isLoading) {
    return (
      <span>
        <Loader />
      </span>
    );
  }

  if (error) {
    return (
      <span className="text-white">An error has occurred: {error.message}</span>
    );
  }

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 cursor-pointer">Headlines</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.slice(0, 12).map((item, index) => (
          <NewsCard key={index} title={item.title} url={item.url} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
