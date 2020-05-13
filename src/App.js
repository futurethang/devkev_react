import React, { useState, useEffect } from "react";
import { Categories, CategoryFilter, Post } from "./components/index";
import "./assets/styles/App.scss";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { CATEGORY_KEYS, WEBDEV_LOGOS } from "./utils/enums";
import Ticker from "react-ticker";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [data, setData] = useState({ posts: [] });
  const [filteredPosts, setFilteredPosts] = useState({ posts: [] });

  const getData = async (url) => {
    const result = await axios(url);
    setData({ posts: result.data });
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
    <div className="App">
      {/* ///// HEADER CONTENT ///// */}
      <header className="App-header">
        <div className="title-nav">
          <a href="https://devkev.net">
            <h1>DEVKEV.NET</h1>
          </a>
          <Categories
            categories={Object.keys(CATEGORY_KEYS)}
            filterCategory={filterCategory}
          />
          {/* <nav>
            {Object.keys(CATEGORY_KEYS).map((category, i) => {
              return (
                <CategoryFilter
                  key={i}
                  category={category}
                  categoryKey={CATEGORY_KEYS[category]}
                  filterCategory={filterCategory}
                />
              );
            })}
          </nav> */}
        </div>
        <div className="sub-header">
          <h2>
            online stuff,
            <br />
            offline stuff
          </h2>
          {/* <button className="site-nav">navigate component</button>
          <input type="search" placeholder="search"></input> */}
        </div>
      </header>
      {/* ///// EVERYTHING BELOW THE HEADER ///// */}
      <div className="site-content">
        <main>
          {filteredPosts.posts.map((item, i) => {
            return (
              <animated.div style={props} key={i}>
                <Post {...item} key={item.id} />
              </animated.div>
            );
          })}
        </main>
        <aside className="side-content">
          {/* // Each of these might be iterations of an Aside component, what are their similarities? */}
          <section className="about-me">
            <h4 className="title is-size-2 has-text-white">Hi, I’m Kevin.</h4>
            <h5 className="is-size-4 has-text-white">
              I’m a Front End Developer & Designer.
            </h5>
            <p className="is-size-6 has-text-white">
              I'm also an artist, musician, photographer, gardener, and kitchen
              gnome. By day I tease apart complex UX problems with leading
              JavaScript frameworks and chase the future with next-generation
              web technnologies. My experience in design, business, customer
              care, and leadership enable me to work excellently with designers
              and devs alike to craft user experiences that are robust,
              reusable, accessible, and creative.
            </p>
            <p className="is-size-6 has-text-white">
              Looking for a strong addition to your team? &nbsp;
              <a href="#">Contact me!</a>
            </p>
            <span className="icon is-large has-text-white">
              <a href="https://github.com/futurethang" target="blank">
                <i className="fab fa-2x fa-github"></i>
              </a>
            </span>
            <span className="icon is-large has-text-white">
              <a
                href="https://www.linkedin.com/in/kevin-hyde-fullstack/"
                target="blank"
              >
                <i className="fab fa-2x fa-linkedin"></i>
              </a>
            </span>
          </section>
          <section className="technologies">
            <h4>technologies</h4>
            <Ticker>
              {({ index }) => (
                <>
                  <img src={WEBDEV_LOGOS.aws} />
                </>
              )}
            </Ticker>
          </section>
          <section className="links">
            <h4>links</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              voluptatibus alias laboriosam corrupti eaque eius ipsum
              repudiandae consequuntur eum accusamus ea veniam, velit, suscipit
              non voluptate expedita architecto nulla eligendi.
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;
