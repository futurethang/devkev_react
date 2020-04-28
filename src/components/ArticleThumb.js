import React from "react";

const formatDate = (date) => {
  if (date !== undefined) {
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const year = date.substring(2, 4);
    return `${month}.${day}.${year}`;
  }
};

export default function ArticleThumb(props) {
  const formattedDate = formatDate(props.date);

  return (
    <div className="article-thumb">
      <div
        className="thumb-image"
      ></div>
      <span className="article-date">{formattedDate}</span>
    </div>
  );
}
