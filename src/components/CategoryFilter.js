import React from "react";
import { animated, useSpring, useChain } from "react-spring";

export default function CategoryFilter(props) {
  function getInitials(text) {
    return text[0];
  }

  const buttonsLoad = useSpring({
    to: {
      opacity: 1,
      bottom: "0px",
    },
    from: {
      opacity: 0,
      bottom: "-20px",
    },
  });

  return (
    <div>
      <animated.button
        className="category-nav-button"
        onClick={(e) => props.filterCategory(e.target)}
        value={props.category}
        alt={props.category}
        title={props.category}
        data-catkey={props.categoryKey}
        style={buttonsLoad}
      >
        {getInitials(props.category)}
      </animated.button>
    </div>
  );
}
