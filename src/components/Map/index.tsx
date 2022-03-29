import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../common/theme';
import Row from '../Row';

interface MapProps {
  map: number[][];
}

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Map: FC<MapProps> = ({ map }) => {
  const rows = map.map((item) => <Row row={item} />);
  return <MapWrapper>{rows}</MapWrapper>;
};

export default Map;
