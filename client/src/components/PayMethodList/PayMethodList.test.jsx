// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import PayMethodList from './PayMethodList';

// Dummy Data
import payMethodList from '../../dummyData/payMethodList';

describe('PayMethodList', () => {
  beforeEach(() => {
    render(<PayMethodList methods={payMethodList} />);
  });
  it('should render without crashing', () => {});
  it('should display the provider name', () => {
    payMethodList.forEach((method) => {
      const renderedText = screen.getByText(method.provider);
      const rendered = screen.getByTestId(`payMethod${method.url}`);
      expect(renderedText).toBeTruthy();
      expect(rendered).toBeTruthy();
    });
  });
});
