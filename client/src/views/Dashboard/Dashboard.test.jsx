import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import UserContext from '../../contexts/UserContext';
import userInfo from '../../dummyData/userInfo';

it('should render without crashing', () => {
  render(<UserContext.Provider value={userInfo}><Dashboard /></UserContext.Provider>);
});
