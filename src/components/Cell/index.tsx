import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../common/theme';

interface CellProps {
  value: number;
}

const CellWrapper = styled.div<CellProps>`
  width: 30px;
  height: 30px;
  background-color: ${({ value }) =>
    value ? theme.colors.earth : theme.colors.water};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cell: FC<CellProps> = ({ value }) => {
  return <CellWrapper value={value}>{value}</CellWrapper>;
};

export default Cell;
