// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import PayMethodList from './PayMethodList';

import payMethodList from '../../dummyData/payMethodList';

describe('PayMethodList', () => {
  it('should render without crashing', () => {
    render(<PayMethodList methods={payMethodList} />);
  });
});
