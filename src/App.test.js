// App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { useSearchRecipesMutation } from './app/services/recipes';

// Мокаем хук для тестирования
jest.mock('./app/services/recipes', () => ({
  useSearchRecipesMutation: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    // Сбрасываем состояние мока перед каждым тестом
    (useSearchRecipesMutation as jest.Mock).mockClear();
  });

  test('renders input and button', () => {
    render(<App />);
    
    const inputElement = screen.getByLabelText(/Ингредиенты:/i);
    const buttonElement = screen.getByRole('button', { name: /поиск/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls search recipe mutation and displays recipes', async () => {
    // Настраиваем мок для поиска рецептов
    (useSearchRecipesMutation as jest.Mock).mockReturnValue([
      jest.fn().mockResolvedValue({
        unwrap: jest.fn().mockResolvedValue([
          { _id: '1', title: 'Борщ', description: 'Суп из свеклы', ingredients: ['Свекла', 'Мясо'], photo: '' },
        ]),
      }),
    ]);

    render(<App />);

    const inputElement = screen.getByLabelText(/Ингредиенты:/i);
    const buttonElement = screen.getByRole('button', { name: /поиск/i });

    fireEvent.change(inputElement, { target: { value: 'говядина' } });
    fireEvent.click(buttonElement);

    const recipeElement = await screen.findByText(/Борщ/i);
    expect(recipeElement).toBeInTheDocument();
  });

  test('displays message when no recipes found', async () => {
    (useSearchRecipesMutation as jest.Mock).mockReturnValue([
      jest.fn().mockResolvedValue({
        unwrap: jest.fn().mockResolvedValue([]),
      }),
    ]);

    render(<App />);

    const inputElement = screen.getByLabelText(/Ингредиенты:/i);
    const buttonElement = screen.getByRole('button', { name: /поиск/i });

    fireEvent.change(inputElement, { target: { value: 'неизвестный ингредиент' } });
    fireEvent.click(buttonElement);

    const noRecipesElement = await screen.findByText(/Рецепты не найдены/i);
    expect(noRecipesElement).toBeInTheDocument();
  });

  test('removes recipe upon delete', async () => {
    (useSearchRecipesMutation as jest.Mock).mockReturnValue([
      jest.fn().mockResolvedValue({
        unwrap: jest.fn().mockResolvedValue([
          { _id: '1', title: 'Борщ', description: 'Суп из свеклы', ingredients: ['Свекла', 'Мясо'], photo: '' },
        ]),
      }),
    ]);

    render(<App />);

    const inputElement = screen.getByLabelText(/Ингредиенты:/i);
    const buttonElement = screen.getByRole('button', { name: /поиск/i });

    fireEvent.change(inputElement, { target: { value: 'говядина' } });
    fireEvent.click(buttonElement);

    const recipeElement = await screen.findByText(/Борщ/i);
    expect(recipeElement).toBeInTheDocument();

    const deleteButton = screen.getByText(/Удалить/i);
    fireEvent.click(deleteButton);
    expect(recipeElement).not.toBeInTheDocument();
  });
});
