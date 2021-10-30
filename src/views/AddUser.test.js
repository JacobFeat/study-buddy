import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/dom';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Stefan' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55 ' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5 ' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Stefan');
  });

  it('Prevent adding new users without checked consent', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Stefan' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55 ' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5 ' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Stefan');
    expect(newUser).not.toBeInTheDocument();
  });
});
