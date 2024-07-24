import React from 'react';
import './NewsCard.css';


const NewsCard = ({ author, title, description, url, urlToImage, publishedAt }) => {
 
  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} className="thumbnail" />
      <div className="card-content">
        <div className="date-author">
         {publishedAt} / {author}
        </div>
        <h3 className="title">{title}</h3>
        <p className="summary">{description}</p>
        <a href={url} target='_blank' className="read-more tag">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
