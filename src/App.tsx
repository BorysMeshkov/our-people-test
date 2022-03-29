import React, { useState } from 'react';
import styled from 'styled-components';
import generateIslandsMap from './common/utils/generateIslandsMap';
import Map from './components/Map';

interface IslandsOutput {
  map: number[][];
  islands: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [map, setMap] = useState(generateIslandsMap());
  const [islandsCount, setIslandsCount] = useState(2);

  const onClickHandler = () => setMap(generateIslandsMap());

  return (
    <Wrapper>
      <h1>Islands App</h1>
      <Map map={map} />
      <p>Islands count: {islandsCount}</p>
      <button onClick={onClickHandler} type="button">
        Regenerate Islands
      </button>
    </Wrapper>
  );
}

export default App;
