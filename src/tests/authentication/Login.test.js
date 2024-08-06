import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../../components/authentication/Login';

test('renders Login component with Logo, Heading, and LoginForm', () => {
  const { getByAltText, getByRole } = render(<Login />);

  expect(getByRole('heading', { level: 4 })).toHaveTextContent('Log in to your account');
  expect(getByRole('form')).toBeInTheDocument();
  expect(getByAltText('Logo')).toBeInTheDocument();
});
