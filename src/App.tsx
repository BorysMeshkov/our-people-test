import React, { FC, useState } from 'react';
import styled from 'styled-components';
import countIslands from './common/utils/countIslands';
import generateIslandsMap from './common/utils/generateIslandsMap';
import Map from './components/Map';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: FC = () => {
  const [map, setMap] = useState(generateIslandsMap());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [islandsCount, setIslandsCount] = useState(7);

  const onClickHandler = () => {
    const generatedMap = generateIslandsMap();
    setMap(generatedMap);
    // setIslandsCount(countIslands(generatedMap));
  };

  return (
    <Wrapper>
      <h1>Islands App</h1>
      <Map map={map} />
      <p>Islands count(mocked): {islandsCount}</p>
      <button onClick={onClickHandler} type="button">
        Regenerate Islands
      </button>
    </Wrapper>
  );
};

export default App;
