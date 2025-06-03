import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Добавляем расширения expect
import { Card } from './index';
import { PATHS } from '../../paths';
import { useDeleteRecipeMutation } from '../../app/services/recipes';

// Мокаем хуки и компоненты
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

jest.mock('../../app/services/recipes', () => ({
  useDeleteRecipeMutation: jest.fn(() => [jest.fn()]),
}));

describe('Card Component', () => {
  const mockProps = {
    id: '1',
    title: 'Тестовый рецепт',
    description: 'Это описание тестового рецепта',
    photo: 'test.jpg',
    ingredients: [
      { _id: '1', name: 'Ингредиент 1', quantity: '100', unit: 'гр' },
      { _id: '2', name: 'Ингредиент 2', quantity: '2', unit: 'шт' },
    ],
    onDelete: jest.fn(),
  };

  it('1. Рендерит заголовок', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Тестовый рецепт')).toBeInTheDocument();
  });

  it('2. Рендерит описание', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Это описание тестового рецепта')).toBeInTheDocument();
  });

  it('3. Рендерит ингредиенты', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Ингредиент 1')).toBeInTheDocument();
    expect(screen.getByText('Ингредиент 2')).toBeInTheDocument();
  });

  it('4. Рендерит кнопку "изменить" с правильным ссылкой', () => {
    render(<Card {...mockProps} />);
    const editLink = screen.getByText('изменить');
    expect(editLink).toBeInTheDocument();
    expect(editLink).toHaveAttribute('href', `${PATHS.edit}/1`);
  });

  it('5. Вызывает onDelete при клике на "удалить"', () => {
    render(<Card {...mockProps} />);
    fireEvent.click(screen.getByText('удалить'));
    expect(mockProps.onDelete).toHaveBeenCalledWith('1');
  });

  it('6. Вызывает deleteRecipe при клике на "удалить"', () => {
    const mockDelete = jest.fn();
    (useDeleteRecipeMutation as jest.Mock).mockReturnValue([mockDelete]);
    
    render(<Card {...mockProps} />);
    fireEvent.click(screen.getByText('удалить'));
    
    expect(mockDelete).toHaveBeenCalledWith('1');
  });

  it('7. Отображает изображение с правильным alt', () => {
    render(<Card {...mockProps} />);
    const image = screen.getByAltText('1');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });
});