import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.isSecondary ? 'orange' : '#c0c7d6')};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-items: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = () => {
  <StyledButton>
    <DeleteIcon />
  </StyledButton>;
};

export default Button;
