import React from 'react';
import styled from 'styled-components';
import Map from './components/Map';

interface IslandsOutput {
  map: number[][];
  islands: number;
}

const islandsOutput: IslandsOutput = {
  map: [
    [0, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ],
  islands: 2,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <h1>Islands App</h1>
      <Map map={islandsOutput.map} />
      <p>Islands count: {islandsOutput.islands}</p>
    </Wrapper>
  );
}

export default App;
