import React, { useEffect, useState } from "react";
import NewsArticle from "../NewsArticle";
import { Loading, SearchBar } from "../../../components/lib";
import "./NewsFeed.scss";

const getNewsData = async (topics) => {
  const urlString = topics.map((t) => `"${encodeURIComponent(t)}"`).join(",");
  if (topics.length > 0) {
    const resp = await fetch(`http://localhost:8080/news?topics=${urlString}`);
    const data = await resp.json();
    return data;
  } else {
    return null;
  }
};

const NewsFeed = () => {
  /* TODO: 
    - fetch news from server, break up data and render
    - handle search terms in search bar and append to news
    - look up some kind of dictionary for autocomplete?
    - handle date ranges possibly?
  */
  const [newsData, setNewsData] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [topics, setTopics] = useState([]);
  const [latestTopic, setLatestTopic] = useState("");

  useEffect(() => {
    // TODO: pull existing topics from Localstorage
  }, []);

  const onSearchButtonClick = () => {
    const searchTopics = new Set(topics);
    setIsLoadingData(true);
    if (
      latestTopic.length > 0 &&
      !searchTopics.has(latestTopic) &&
      window.confirm(`Do you want to include ${latestTopic} in your search?`)
    ) {
      searchTopics.add(latestTopic);
      setTopics(Array.from(searchTopics));
      setLatestTopic("");
    }

    getNewsData(Array.from(searchTopics)).then((newsData) => {
      setNewsData(newsData.articles);
      setIsLoadingData(false);
    });
  };

  const onAddTopicClick = (val) => {
    if (val.length > 0) {
      const uniqTopics = new Set(topics);
      uniqTopics.add(val);
      setTopics(Array.from(uniqTopics));
      setLatestTopic("");
    }
  };

  const removeTopic = (topic) => {
    const uniqTopics = new Set(topics);
    uniqTopics.delete(topic);
    setTopics(Array.from(uniqTopics));
  };

  const onSearchKeyDown = (e) => {
    // if we hit enter, add a topic
    if (e.which === 13 && !e.ctrlKey) {
      onAddTopicClick(latestTopic);
    } else if (e.which === 13 && e.ctrlKey) {
      // ctrl+enter to search
      onSearchButtonClick();
    }
  };
  return (
    <div className="container shadowed newsFeed">
      <div>News Feed</div>
      <SearchBar
        onChange={(e) => setLatestTopic(e.target.value)}
        value={latestTopic}
        onKeyDown={onSearchKeyDown}
      />
      <div className="buttonContainer">
        <button onClick={(e) => onAddTopicClick(latestTopic)}>
          Add to list of topics
        </button>
        <button onClick={onSearchButtonClick}>Search!</button>
      </div>
      <div className="topicList">
        {topics.map((topic) => (
          <div className="shadowed topic" key={topic}>
            {topic}{" "}
            <span className="removeTopic" onClick={() => removeTopic(topic)}>
              x
            </span>
          </div>
        ))}
      </div>
      {isLoadingData ? (
        <Loading />
      ) : newsData != null ? (
        <div className="shadowed articles">
          {newsData.map((news) => (
            <NewsArticle newsData={news} key={news.url} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NewsFeed;
