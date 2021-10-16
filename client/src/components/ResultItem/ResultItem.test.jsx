import React from 'react';
import { render } from '@testing-library/react';
import ResultItem from './ResultItem';

it('should render without crashing', () => {
  render(<ResultItem username="Sam" />);
});
