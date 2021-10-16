import React from 'react';
import { NavList, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <NavList>
      <Logo>
        <h1>
          Study <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/addUser">Add User</StyledLink>
      <StyledLink to="/">Settings</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </NavList>
  );
};

export default Navigation;
