import PropTypes from 'prop-types';
import styled from 'styled-components';

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before,
  &:after,
  & {
    border-radius: 50%;
    width: 1em;
    height: 1em;
    animation: animation 1.2s infinite ease-in-out;
  }

  & {
    animation-delay: -0.16s;
  }

  &:before {
    left: -2.5em;
    animation-delay: -0.32s;
  }

  &:after {
    left: 2.5em;
  }

  @keyframes animation {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em ${({ theme }) => theme.colors.darkGrey};
    }
    40% {
      box-shadow: 0 2.5em 0 0 ${({ theme }) => theme.colors.darkGrey};
    }
  }
`;

export default Loading;
