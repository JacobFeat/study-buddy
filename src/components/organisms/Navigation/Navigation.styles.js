import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.nav`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  /* height: 60px; */
  width: 100%;
  padding-left: 50px;
  margin-bottom: 25px;

  h1 {
    font-size: 15px;
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-align: right;
  margin: 15px 20px 15px auto;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  position: relative;

  &.${activeClassName}::after {
    opacity: 1;
  }

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 14px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
