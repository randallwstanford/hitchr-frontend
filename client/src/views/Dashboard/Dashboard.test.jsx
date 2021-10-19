import React from 'react';
import { render, act } from '@testing-library/react';
import Dashboard from './Dashboard';
import UserContext from '../../contexts/UserContext';
import userInfo from '../../dummyData/userInfo';

it('should render without crashing', async () => {
  await act(async () => {
    render(
      <UserContext.Provider value={userInfo}>
        <Dashboard />
      </UserContext.Provider>,
    );
  });
});
