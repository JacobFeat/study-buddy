import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UserList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/addUser">Add User</Link>
          </nav>
          <Switch>
            <Route path="/addUser">
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
            <Route path="/">
              <UserList deleteUser={deleteUser} users={users} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
