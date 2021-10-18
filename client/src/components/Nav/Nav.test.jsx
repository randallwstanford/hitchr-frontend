// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import Nav from './Nav';
import UserContext from '../../contexts/UserContext';
import userInfo from '../../dummyData/userInfo';

it('should render without crashing', () => {
  render(<UserContext.Provider value={userInfo}><Nav /></UserContext.Provider>);
});
