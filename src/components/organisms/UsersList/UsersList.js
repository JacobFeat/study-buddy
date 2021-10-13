import React from 'react';
import { users } from 'data/users';
import styled from 'styled-components';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UserListStyles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
