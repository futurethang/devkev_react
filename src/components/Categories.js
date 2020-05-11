import React from "react";
import { CategoryFilter } from "./index";
import { animated, config, useSpring, useTrail } from "react-spring";
import {CATEGORY_KEYS} from "../utils/enums";

export default function Categories(props) {
  function getInitials(text) {
    return text[0];
  }

  const trail = useTrail(props.categories.length, {
    config: { mass: 1, tension: 200, friction: 20 },
    to: {
      opacity: 1,
      bottom: "0px",
    },
    from: {
      opacity: 0,
      bottom: "-10px",
    },
  });

  return (
    <nav>
      {trail.map(({ opacity, bottom }, index) => {
        return (
          <animated.button
            className="category-nav-button"
            onClick={(e) => props.filterCategory(e.target)}
            value={props.categories[index]}
            alt={props.categories[index]}
            title={props.categories[index]}
            data-catkey={CATEGORY_KEYS[props.categories[index]]}
            style={{ opacity, bottom }}
          >
            {getInitials(props.categories[index])}
          </animated.button>
        );
      })}
    </nav>
  );
}
