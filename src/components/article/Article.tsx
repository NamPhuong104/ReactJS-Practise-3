import React from "react";
import "./Article.css";

type ArticleProp = {
  articles: {
    title: string;
    data: string;
    imgUrl: string;
  }[];
};

const Article = (props: ArticleProp) => {
  return (
    <div className="main">
      {props.articles.map((item) => (
        <div className="content">
          <img src={item.imgUrl} alt="" />
          <h2>{item.title}</h2>
          <p>{item.data}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;
