import React from "react";
import "./NewsTitle.css";

const NewsTitle = ({ newsData }) => {
  const { title, author, description, publishedAt, source, url } = newsData;
  return (
    <div className="newsTitle">
      <div className="title">{title}</div>
      <div className="nameDate">
        <div className="author">{author}</div>
        &nbsp;@&nbsp;
        <div className="publishedAt">{publishedAt}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default NewsTitle;
