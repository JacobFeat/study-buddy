import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button/Button.styles';

const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, value }) => {
    // console.log(Average);
    if (value > 4) return theme.colors.success;
  }};
`;

const Average = ({ average }) => {
  return (
    <StyledAverage average>
      <div>{average}</div>
    </StyledAverage>
  );
};

export default Average;
