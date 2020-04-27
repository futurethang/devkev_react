import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function MetaData(props) {
  const [tags, setTags] = useState([]);

  const getTagsRegistry = async () => {
    let data = await Axios("http://devkev.net/wp-json/wp/v2/tags");
    let tags = {};
    data.data.forEach((tag) => {
      tags[tag.id] = tag["name"];
    });
    setTags(tags);
  };

  useEffect(() => {
    getTagsRegistry();
  }, []);

  return (
    <div className="meta-data">
      <header>
        <div className="publish-date">{`Published at ${props.date} on ${props.date}`}</div>
        <div className="social"></div>
      </header>
      <section className="tags">
        {Object.keys(tags).map((tag, i) => {
          return <button key={i}>{tags[Number(tag)]}</button>;
        })}
      </section>
    </div>
  );
}
