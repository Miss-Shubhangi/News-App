import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from "./../../Components/NewsCard/NewsCard";
import "./Home.css";

function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadNews = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error loading news:", error);
    }
  };
  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);

 
  return (
    <div>
      <div className='news-heading'>
        <div className='news-content'>
          <p className='heading'>&emsp;&ensp;&nbsp; SpredIt News 🎤📢🎯</p>
          <p className='subheading'> आजकल की Trending News ...!</p>
        </div>
        <form className='news-search' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Search News'
            className='search-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
         
        </form>
      </div>
      <div className='news-container'>
        {news.map((newsArticle, i) => {
          const { author, title, description, url, urlToImage, publishedAt, content } = newsArticle;
          return (
            <NewsCard
              key={i}
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
