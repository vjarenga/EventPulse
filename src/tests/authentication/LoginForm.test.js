import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../../components/authentication/LoginForm';
import { useLogin } from '../../hooks/useLogin';

jest.mock('../../hooks/useLogin');

test('renders LoginForm component', () => {
  useLogin.mockReturnValue({ login: jest.fn(), isLoading: false });
  
  const { getByLabelText, getByRole } = render(<LoginForm />);
  
  expect(getByLabelText(/email address/i)).toBeInTheDocument();
  expect(getByLabelText(/password/i)).toBeInTheDocument();
  expect(getByRole('button', { name: /log in/i })).toBeInTheDocument();
});

test('calls login function on form submit', () => {
  const mockLogin = jest.fn();
  useLogin.mockReturnValue({ login: mockLogin, isLoading: false });

  const { getByLabelText, getByRole } = render(<LoginForm />);

  fireEvent.change(getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(getByRole('button', { name: /log in/i }));

  expect(mockLogin).toHaveBeenCalledWith(
    { email: 'test@example.com', password: 'password123' },
    expect.anything()
  );
});

test('disables inputs and button when loading', () => {
  useLogin.mockReturnValue({ login: jest.fn(), isLoading: true });

  const { getByLabelText, getByRole } = render(<LoginForm />);

  expect(getByLabelText(/email address/i)).toBeDisabled();
  expect(getByLabelText(/password/i)).toBeDisabled();
  expect(getByRole('button', { name: /log in/i })).toBeDisabled();
});
