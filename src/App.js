import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { MainContentArea, LogoTicker, Home, Portfolio } from "./components/index";
import "./assets/styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        {/* ///// HEADER CONTENT ///// */}
        <header className="App-header">
          <div className="title-nav">
            
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>

            {/* <Categories
            categories={Object.keys(CATEGORY_KEYS)}
            filterCategory={filterCategory}
          /> */}
          </div>
          <div className="sub-header">
          <h1>DEV.KEV</h1>
            <h2>
              online stuff,
              <br />
              offline stuff
            </h2>
          </div>
        </header>
        {/* ///// EVERYTHING BELOW THE HEADER ///// */}
        <div className="site-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/posts">
              <MainContentArea />
            </Route>
          </Switch>
          {/* <main>
            {filteredPosts.posts.map((item, i) => {
              return (
                <animated.div style={props} key={i}>
                  <Post {...item} key={item.id} />
                </animated.div>
              );
            })}
          </main> */}
          <aside className="side-content">
            {/* // Each of these might be iterations of an Aside component, what are their similarities? */}
            <section className="about-me">
              <h4 className="title is-size-2 has-text-white">Hi, I’m Kevin.</h4>
              <h5 className="is-size-4 has-text-white">
                I’m a Front End Developer & Designer.
              </h5>
              <p className="is-size-6 has-text-white">
                I'm also an artist, musician, photographer, gardener, and
                kitchen gnome. By day I tease apart complex UX problems with
                leading JavaScript frameworks and chase the future with
                next-generation web technnologies. My experience in design,
                business, customer care, and leadership enable me to work
                excellently with designers and devs alike to craft user
                experiences that are robust, reusable, accessible, and creative.
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
    </Router>
  );
}

export default App;
