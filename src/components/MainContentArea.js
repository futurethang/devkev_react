import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import {Categories, Post} from './index'
import { CATEGORY_KEYS } from "../utils/enums";

export default function MainContentArea() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [data, setData] = useState({ posts: [] });
  const [filteredPosts, setFilteredPosts] = useState({ posts: [] });

  const getData = async (url) => {
    const result = await axios(url);
    setData({ posts: result.data });
    const featurePost = result.data.filter((post) => {
      return post["sticky"] === true;
    });
    setFilteredPosts({ posts: featurePost });
  };

  useEffect(() => {
    getData("https://devkev.net/wp-json/wp/v2/posts");
  }, []);

  const filterCategory = async (target) => {
    const key = Number(target.dataset.catkey);
    if (key === 0) {
      setFilteredPosts({ posts: data.posts });
    } else {
      const newList = await data.posts.filter((post) => {
        return post["categories"].includes(key);
      });
      setFilteredPosts({ posts: newList });
    }
  };

  return (
    <main>
      <Categories
        categories={Object.keys(CATEGORY_KEYS)}
        filterCategory={filterCategory}
      />

      {filteredPosts.posts.map((item, i) => {
        return (
          <animated.div style={props} key={i}>
            <Post {...item} key={item.id} />
          </animated.div>
        );
      })}
    </main>
  );
}
