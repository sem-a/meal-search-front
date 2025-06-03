import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index'; // Замените на путь к вашему файлу
import '@testing-library/jest-dom';

jest.mock('../header', () => ({
  __esModule: true,
  default: () => <div>Mock Header</div>, // Замените на необходимый мок
}));


describe('Layout component rendering', () => {
  it('renders children within the Layout component', () => {
    render(
      <Layout>
        <p>Test Content</p>
      </Layout>
    );
    expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Header/i)).toBeInTheDocument(); // Проверка на рендеринг заголовка
  });
});

