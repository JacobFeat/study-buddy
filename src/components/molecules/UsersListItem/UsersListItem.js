import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UserListItem.styles';
import StyledAverage from 'components/atoms/Average/StyledAverage';
import StyledInfo from 'components/atoms/Info/StyledInfo';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
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
