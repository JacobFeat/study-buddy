import styled from 'styled-components';

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
  background-color: red;
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;

export default StyledAverage;
