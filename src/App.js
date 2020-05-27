import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Categories, Post, LogoTicker } from "./components/index";
import { useSpring, animated } from "react-spring";
import { CATEGORY_KEYS } from "./utils/enums";
import "./assets/styles/App.scss";

function App() {
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
    <div className="App">
      {/* ///// HEADER CONTENT ///// */}
      <header className="App-header">
        <div className="title-nav">
          <h1>DEV.KEV</h1>
          <Categories
            categories={Object.keys(CATEGORY_KEYS)}
            filterCategory={filterCategory}
          />
        </div>
        <div className="sub-header">
          <h2>
            online stuff,
            <br />
            offline stuff
          </h2>
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
              <a href="mailto:kphyde@gmail.com">Contact me!</a>
            </p>
            <a
              className="social-logo"
              href="https://github.com/futurethang"
              target="blank"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <a
              className="social-logo"
              href="https://www.linkedin.com/in/kevin-hyde-fullstack/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a
              className="social-logo"
              href="mailto:kphyde@gmail.com"
              target="blank"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" />
            </a>
          </section>
          <section className="technologies">
            <h4>My Toolkit</h4>
            <LogoTicker />
          </section>
        </aside>
      </div>
    </div>
  );
}

export default App;
