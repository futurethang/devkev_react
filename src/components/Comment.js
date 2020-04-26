import React from "react";

export default function Comment(props) {
  return (
    <div className="comment">
      <header>
        <h5>{props.name}</h5>
      </header>
      <section>
        <p>{props.body}</p>
      </section>
      <footer>
        <span>posted by {props.email}</span>
      </footer>
    </div>
  );
}
