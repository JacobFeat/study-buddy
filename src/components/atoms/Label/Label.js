import styled from 'styled-components';

export const Label = styled.label`
  margin: 10px 0 5px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
