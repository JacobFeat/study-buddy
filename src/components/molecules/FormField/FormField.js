import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0 2px;
  }
`;

const FormField = React.forwardRef(({ onChange, value, label, name, id, type = 'text' }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input ref={ref} name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
