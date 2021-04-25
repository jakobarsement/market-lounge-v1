import React from "react";
import { formatPublishedDateTime } from "./news-feed.utils";
import "./news-feed-table.styles.scss";

const NewsFeedTable = ({ feeds }) => {
  const renderNewsFeeds = () => {
    if (feeds.length) {
      return (
        <table>
          {feeds.map((item, index) => {
            const { image, publishedDate, title, url } = item;
            return (
              <thead key={"head" + index} className="table-item">
                <tr key={"row" + index}>
                  <td key={"image" + index}>
                    {image && (
                      <img src={image} alt="img" className="feedImage" />
                    )}
                  </td>
                  <tr key={"title" + index} className="link-tag">
                    {url && (
                      <a href={url} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    )}
                  </tr>
                  <tr key={"publishDate" + index} className="date-tag">
                    {publishedDate && formatPublishedDateTime(publishedDate)}
                  </tr>
                </tr>
              </thead>
            );
          })}
        </table>
      );
    } else {
      return <>No news feed available.</>;
    }
  };

  return (
    <div className="news-feeds-table">
      <div className="news-feed-title">
        <h3>
          <i class="fas fa-newspaper fa-1x"></i> News Feed
        </h3>
      </div>
      {renderNewsFeeds()}
    </div>
  );
};

export default NewsFeedTable;
