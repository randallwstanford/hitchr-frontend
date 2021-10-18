// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import Nav from './Nav';

it('should render without crashing', () => {
  render(<Nav />);
});
