import styled from 'styled-components';

const StyledError = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.error};
`;

export default StyledError;
