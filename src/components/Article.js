import React from "react";

export const Article = ({ article }) => {
  return (
    <article>
      <img alt={article.thumbnail} src={article.thumbnail} />
      <div className="text">
        <h3>{article.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
          excepturi?
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.reddit.com/" + article.permalink);
          }}
        >
          Leggi Articolo
        </button>
      </div>
    </article>
  );
};
