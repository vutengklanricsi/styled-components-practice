import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const MainWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === "first") {
      return "flex-end";
    } else if (page === "middle") {
      return "space-between";
    } else {
      return "flex-start";
    }
  }};
`;

function App() {
  return (
    <MainWrapper>
      <Button primary>My primary Button</Button>
      <Button>My Button</Button>
      <PaginationWrapper page="middle">
        <Button>Page 2</Button>
        <Button>Page 4</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
}

export default App;
