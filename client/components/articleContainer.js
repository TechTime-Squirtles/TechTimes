import React, { useState, useEffect } from 'react';
import ArticleCard from './articleCard';
import mockArticles from './mockData'; // Import mock data

export default function ArticleContainer() {
  //   const [articles, setArticles] = useState([]);

  //   useEffect(() => {
  //     fetch('/getNews')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setArticles(data.articles);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching articles:', error);
  //       });
  //   }, []);

  return (
    <div className='article-container'>
      {mockArticles.map((article) => (
        <ArticleCard
          key={article.id}
          title={<a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>}
          author={article.author}
          source={article.source}
          date={article.date}
          img={article.img}
          description={article.description}
        />
      ))}
    </div>
  );
}