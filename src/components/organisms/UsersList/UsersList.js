import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserListStyles';
import StyledTitle from 'components/atoms/Title/Title';

const UsersList = ({ users = [] }) => {
  // const { users } = useContext(UsersContext);

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
