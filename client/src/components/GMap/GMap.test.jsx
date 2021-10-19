// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import GMap from './GMap';

it('should render without crashing', () => {
  render(<GMap />);
});
