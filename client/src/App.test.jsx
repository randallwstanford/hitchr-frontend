import React from 'react';
import { render } from '@testing-library/react';

// components
import App from './App';

it('should render without crashing', () => {
  render(<App />);
});
