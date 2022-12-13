import React from "react";
import "./NewsContent.scss";

const NewsContent = ({ newsContent }) => {
  const { content, urlToImage, url, source } = newsContent;
  const { name } = source;

  return (
    <div className="newsContent">
      <img src={urlToImage} alt="img" />
      <div className="content">{content}</div>
      <div className="readUrl">
        Read this article on{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
    </div>
  );
};

export default NewsContent;
