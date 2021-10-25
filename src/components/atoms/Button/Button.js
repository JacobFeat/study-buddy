import styled from 'styled-components';

const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '8px 36px' : '6px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;

export default Button;
