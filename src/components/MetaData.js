import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function MetaData(props) {
  const [tags, setTags] = useState([]);

  const getTagsRegistry = async (tagIds) => {
    let tags = [];
    for (const tagId of tagIds) {
      const data = await Axios(
        `https://devkev.net/wp-json/wp/v2/tags/${tagId}`
      );
      tags.push(data.data.name);
    }
    setTags(tags);
  };

  const formatDate = (date) => {
    if (date !== undefined) {
      const month = date.substring(5, 7);
      const day = date.substring(8, 10);
      const year = date.substring(2, 4);
      return `${month}.${day}.${year}`;
    }
  };

  useEffect(() => {
    getTagsRegistry(props.tags);
  }, []);

  return (
    <div className="meta-data">
      <header>
        <div className="social"></div>
      </header>
      <section className="tags">
        {tags.map((tag, i) => {
          return (
            <button className="tag-toggle" key={i}>
              {tag}
            </button>
          );
        })}
      </section>
    </div>
  );
}
