import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UserListItem.styles';
import StyledAverage from 'components/atoms/Average/StyledAverage';
import StyledInfo from 'components/atoms/Info/StyledInfo';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUser(name)} />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
