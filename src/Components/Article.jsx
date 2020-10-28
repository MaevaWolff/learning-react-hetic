import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Article(props) {
  const { article } = props;
  const { title, category, published } = article;

  return (
    <StyledApp>
      <h2>{title}</h2>
      <p>{category}</p>
      <p>{published ? "Published" : "Draft"}</p>
    </StyledApp>
  );
}
