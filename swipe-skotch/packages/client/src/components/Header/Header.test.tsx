import React from '../../assets/pages/Home/node_modules/react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(<Header />);

    // screen.debug();
  });
});
