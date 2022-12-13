import React, { useState } from "react";
import { NewsContent, NewsTitle } from "../components/";

import "./NewsArticle.scss";

const NewsArticle = ({ newsData }) => {
  const [showContent, setShowContent] = useState(false);

  return newsData != null ? (
    <div className="newsArticle">
      <NewsTitle newsData={newsData} />
      {showContent && <NewsContent newsContent={newsData} />}
      <div className="showHide" onClick={() => setShowContent(!showContent)}>
        {showContent ? "Hide" : "Show"} Content...
      </div>
    </div>
  ) : null;
};

export default NewsArticle;
