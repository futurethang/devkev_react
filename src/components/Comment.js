import React from "react";
import Interweave from "interweave";

export default function Comment(props) {
  return (
    <div className="comment">
      <header>
        <h5>{props.author_name}</h5>
      </header>
      <section>
        <Interweave content={props.content.rendered}></Interweave>
      </section>
        <span>posted by {props.author_name}</span>
    </div>
  );
}
