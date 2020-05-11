import React, { useState } from "react";
import Interweave from "interweave";
import { ArticleThumb, Comment, MetaData } from "./index";
import Axios from "axios";

const trimExcerpt = (text) => {
  return `${text.slice(0, 65)} . . .`;
};

function Post(props) {
  const [comments, setComments] = useState([]);
  const [commentsShowing, setCommentsShowing] = useState(false);

  const metaData = {
    date: props.date,
    comments: null,
    shares: null,
    tags: props.tags,
  };

  const loadComments = async (id) => {
    const comments = await Axios(
      `https://devkev.net/wp-json/wp/v2/comments?post=${id}`
    );
    setComments(comments.data);
    setCommentsShowing(!commentsShowing);
  };

  return (
    <article className="post">
      <ArticleThumb date={props.date} />
      <div className="article-body">
        <header>
          <div className="header-text">
            <h3>{props.title.rendered}</h3>
            <h4 className="interweave">
              <Interweave content={trimExcerpt(props.excerpt.rendered)} />
            </h4>
          </div>
        </header>
        <section>
          <div className="interweave">
            <Interweave content={props.content.rendered}></Interweave>
          </div>
        </section>
        <footer>
          <MetaData {...metaData} />
          <button onClick={() => loadComments(props.id)}>
            {commentsShowing ? "hide" : "show"} comments
          </button>
          {commentsShowing &&
            comments.map((comment) => {
              return <Comment {...comment} />;
            })}
        </footer>
      </div>
    </article>
  );
}

export default Post;
