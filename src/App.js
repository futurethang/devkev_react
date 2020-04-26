import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import "./App.css";
import { useSpring, animated } from "react-spring";
import axios from "axios";

const CATEGORY_KEYS = {
  ALL: 0,
  GENERAL: 4,
  GRAPHIC_DESIGN: 11,
  ILLUSTRATION: 12,
  PHOTOGRAPHY: 19,
  PORTFOLIO: 23,
  SKILL_DEVELOPMENT: 5,
  WEB_DEVELOPMENT: 48,
};

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [data, setData] = useState({ posts: [] });
  const [filteredPosts, setFilteredPosts] = useState({ posts: [] });

  const getData = async (url) => {
    const result = await axios(url);
    setData({ posts: result.data });
  };

  useEffect(() => {
    getData("http://devkev.net/wp-json/wp/v2/posts");
  }, []);

  const filterCategory = async (target) => {
    if (Number(target) === 0) {
      setFilteredPosts({ posts: data.posts });
    } else {
      const newList = await data.posts.filter((post) => {
        return post["categories"].includes(Number(target));
      });
      setFilteredPosts({ posts: newList });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>A Demo of Post Listing</h1>
      </header>
      <nav>
        {Object.keys(CATEGORY_KEYS).map((category, i) => {
          return (
            <button
              onClick={(e) => filterCategory(e.target.value)}
              key={i}
              value={CATEGORY_KEYS[category]}
            >
              {category}
            </button>
          );
        })}
      </nav>
      <section>
        {filteredPosts.posts.map((item) => {
          return (
            <>
              <animated.div style={props}>
                <Post {...item} key={item.id} />
              </animated.div>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default App;
