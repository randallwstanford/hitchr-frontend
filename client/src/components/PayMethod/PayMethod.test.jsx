// Libraries
import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import PayMethod from './PayMethod';

// Dummy Data
import payMethod from '../../dummyData/payMethod';

describe('PayOption', () => {
  beforeEach(() => {
    render(<PayMethod method={payMethod} />);
  });
  it('should render without crashing', () => {});
  it('should display the provider name', () => {
    const renderedText = screen.getByText(payMethod.provider);
    const rendered = screen.getByTestId(`payMethod${payMethod.url}`);
    expect(renderedText).toBeTruthy();
    expect(rendered).toBeTruthy();
  });
});
