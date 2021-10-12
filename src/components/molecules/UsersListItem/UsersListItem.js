import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UserListItem.styles';
import Average from 'components/atoms/Average/Average';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
