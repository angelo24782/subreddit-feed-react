import { useState, useEffect } from "react";
import { Article } from "./components/Article";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("CAT");

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then((res) => {
      if (res.status !== 200) {
        console.warn("Warning: Something is wrong with the api.");
        return;
      }
      res.json().then((data) => {
        if (data != null) setArticles(data.data.children);
      });
    });
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="subreddit_input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
          placeholder="Search..."
        />
      </header>
      <main class="grid">
        {articles !== null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} />
            ))
          : ""}
      </main>
    </div>
  );
}

export default App;
