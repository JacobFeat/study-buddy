import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UserListStyles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem deleteUser={deleteUser} index={i} key={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
