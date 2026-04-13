import React, { useState } from "react";

const articles = [
  { id: 1, title: "React 19 Features", category: "Frontend" },
  { id: 2, title: "Node.js Scaling Tips", category: "Backend" },
  { id: 3, title: "Designing Better APIs", category: "System Design" },
];

function ArticleItem({ article, isSelected, onView }) {
  return (
    <div
      onClick={() => onView(article.id)}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
        backgroundColor: isSelected ? "#eef4ff" : "white",
        borderRadius: "8px",
      }}
    >
      <h4>{article.title}</h4>
      <p>{article.category}</p>
    </div>
  );
}

export default function ViewedArticlesTracker() {
  const [viewedArticleId, setViewedArticleId] = useState(null);

  const viewedArticle = articles.find(
    (article) => article.id === viewedArticleId
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Articles</h2>

      <div>
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            isSelected={article.id === viewedArticleId}
            onView={setViewedArticleId}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px", borderTop: "1px solid #ddd", paddingTop: "15px" }}>
        <h3>Recently Viewed</h3>
        {viewedArticle ? (
          <>
            <p>Title: {viewedArticle.title}</p>
            <p>Category: {viewedArticle.category}</p>
          </>
        ) : (
          <p>No article viewed yet</p>
        )}
      </div>
    </div>
  );
}