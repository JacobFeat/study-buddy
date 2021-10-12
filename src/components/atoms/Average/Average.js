import React from 'react';
import styled from 'styled-components';

const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => {
    return theme.colors.black;
  }};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Average = ({ average }) => (
  <StyledAverage average>
    <div>{average}</div>
  </StyledAverage>
);

export default Average;
