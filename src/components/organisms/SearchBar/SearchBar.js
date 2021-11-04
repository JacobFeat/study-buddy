import React, { useEffect, useState } from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import axios from 'axios';

export const SearchBar = () => {
  const [students, setStudents] = useState([]);

  // if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />

  useEffect(() => {
    axios
      .get(`/students`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, []);

  console.log(students);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input placeholder="Student name" />
    </SearchBarWrapper>
  );
};
