import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserListStyles';
import StyledTitle from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={i} userData={userData} />
          ))}
        </StyledList>
      </>
    </>
  );
};

export default UsersList;
