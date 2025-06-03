import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServerError from './index'; 

describe('ServerError component rendering', () => {
  it('renders ServerError component with correct title and message', () => {
    render(<ServerError />);
    expect(screen.getByRole('heading', { name: /500 - Ошибка сервера/i })).toBeInTheDocument();
    expect(screen.getByText(/Произошла ошибка на сервере. Пожалуйста, попробуйте позже./i)).toBeInTheDocument();
  });
});
