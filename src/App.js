import React from 'react'
import styled from 'styled-components';
import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
	display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <MainWrapper>
      <Button primary>My primary Button</Button>
      <Button >My Button</Button>
    </MainWrapper>
  );
}

export default App;
