import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function MetaData(props) {
  const [tags, setTags] = useState([]);

  const getTagsRegistry = async () => {
    let data = await Axios("https://devkev.net/wp-json/wp/v2/tags");
    let tags = {};
    data.data.forEach((tag) => {
      tags[tag.id] = tag["name"];
    });
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
    getTagsRegistry();
  }, []);

  return (
    <div className="meta-data">
      <header>
        <div className="social"></div>
      </header>
      <section className="tags">
        {Object.keys(tags).map((tag, i) => {
          return (
            <button className="tag-toggle" key={i}>
              {tags[Number(tag)]}
            </button>
          );
        })}
      </section>
    </div>
  );
}
