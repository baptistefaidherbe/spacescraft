import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

describe('<LoginScreen />', () => {
  it('renders email and password input fields', () => {
    render(<LoginScreen />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });
  it('render login button', () => {
    render(<LoginScreen />);
    screen.getByText('Login');
  });
  it('render Terms and Conditions', () => {
    render(<LoginScreen />);
    screen.getByText(' Terms and Conditions');
  });
  it('typing into email input field updates value', () => {
    render(<LoginScreen />);
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.changeText(emailInput, 'test@exampxle.com');
    expect(emailInput.props.value).toEqual('test@exampxle.com');
  });
  it('triggers login on button press', () => {
    const logMock = jest.spyOn(console, 'log');
    logMock.mockImplementation(() => {});
    render(<LoginScreen />);
    const button = screen.getByText('Login');
    fireEvent.press(button);
    expect(logMock).toHaveBeenCalledWith('Pressed');

    logMock.mockRestore();
  });
});
