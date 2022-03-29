import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../common/theme';
import Cell from '../Cell';

interface MapProps {
  row: number[];
}

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Map: FC<MapProps> = ({ row }) => {
  const cells = row.map((item) => <Cell value={item} />);
  return <RowWrapper>{cells}</RowWrapper>;
};

export default Map;
