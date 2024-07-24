import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import NewsCard from "./../../Components/NewsCard/NewsCard"
import "./Home.css"

function Home() {
    const [news , setNews]=useState([])

    const loadNews = async ()=>{
       const  response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-07-23&to=2024-07-23&sortBy=popularity&apiKey=9ec7077ce756435186ea75c2aff5bdd5')
       setNews(response.data.articles)
    }

    useEffect(()=>{
        loadNews()
    },[])

  return (
    <div className='news-container'>
    {
      news.map((newsArticle , i)=>{
        const {author , tittle ,description , url , urlToImage ,publishedAt , content}= newsArticle

       return (<NewsCard  
        author={author} 
        tittle={tittle}
        description={description}
        url={url}
        urlToImage={urlToImage}
        publishedAt={publishedAt}
        content={content}
       />

       )

      })
    }
    </div>
  )
}

export default Home