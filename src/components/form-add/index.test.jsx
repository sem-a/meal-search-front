import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormAdd } from "./index"; // Измените путь если требуется
import { useAddRecipeMutation } from "../../app/services/recipes"; // Импортируйте ваш хук
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";

// Мокируем хук
jest.mock("../../app/services/recipes", () => ({
  useAddRecipeMutation: jest.fn(),
}));
beforeEach(() => {
  window.alert = jest.fn(); // Мокируем alert
});


describe("FormAdd", () => {
  const addRecipeMock = jest.fn();

  beforeEach(() => {
    // Назначаем мок функции при каждом тесте
    useAddRecipeMutation.mockReturnValue([addRecipeMock]);
    addRecipeMock.mockClear();
  });

  test("поля и клик", async () => {
    render(<FormAdd />); // Рендерим компонент

    // Заполняем поля ввода
    fireEvent.change(screen.getByLabelText(/название/i), {
      target: { value: "Новый рецепт" },
    });
    fireEvent.change(screen.getByLabelText(/описание/i), {
      target: { value: "Описание нового рецепта" },
    });
    fireEvent.change(screen.getByLabelText(/кухня/i), {
      target: { value: "Итальянская" },
    });
    fireEvent.change(screen.getByLabelText(/ссылка на фото/i), {
      target: { value: "https://example.com/photo.jpg" },
    });

    // Нажимаем на кнопку "создать"
    fireEvent.click(screen.getByText(/создать/i));

    // Проверяем, что функция addRecipe была вызвана с правильными данными
    expect(addRecipeMock).toHaveBeenCalledWith({
      title: "Новый рецепт",
      description: "Описание нового рецепта",
      cuisine: "Итальянская",
      photo: "https://example.com/photo.jpg",
      ingredients: [],
      steps: [],
    });
  });

  test("ошибка", async () => {
    // Настраиваем процесс так, чтобы он вызывал ошибку
    addRecipeMock.mockRejectedValueOnce(new Error("Ошибка!"));

    render(<FormAdd />);

    fireEvent.change(screen.getByLabelText(/название/i), {
      target: { value: "Новый рецепт" },
    });
    fireEvent.click(screen.getByText(/создать/i));

    // Проверяем, что alert был вызван
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "При добавлении рецепта возникла ошибка!"
      );
    });
  });
});
