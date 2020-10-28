import React from "react";
import styled from "styled-components";

export default function Article() {
  const article = {
    id: 1,
    title: "Article 1",
    category: "News",
    published: true,
    content: "Lorem ipsum blablabla",
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.category}</p>
      <p>{article.published ? "Published" : "Draft"}</p>
    </div>
  );
}
