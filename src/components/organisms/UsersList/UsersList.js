import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserListStyles';
import StyledTitle from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <>
        <StyledTitle>{users.length > 0 ? 'Students list' : 'Students are unavailable'}</StyledTitle>
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
