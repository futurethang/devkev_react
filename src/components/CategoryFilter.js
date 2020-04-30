import React from "react";

export default function CategoryFilter(props) {

  function getInitials(text) {
    return text[0]
  }

  return (
    <div>
      <button
        className="category-nav-button"
        onClick={(e) => props.filterCategory(e.target)}
        value={props.category}
        alt={props.category}
        title={props.category}
        data-catkey={props.categoryKey}
      >
        {getInitials(props.category)}
      </button>
    </div>
  );
}
