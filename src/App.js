import React from 'react'
import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

function App() {
  return (
    <MainWrapper className="App">
      <Button>
        Click on it!
      </Button>
    </MainWrapper>
  );
}

export default App;
