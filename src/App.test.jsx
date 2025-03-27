import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { useSearchRecipesMutation } from "./app/services/recipes";

jest.mock("./app/services/recipes", () => ({
  useSearchRecipesMutation: jest.fn(),
}));

describe("App Component", () => {
  const searchRecipesMutationMock = jest.fn();

  beforeEach(() => {
    useSearchRecipesMutation.mockReturnValue([searchRecipesMutationMock]);
    searchRecipesMutationMock.mockClear();
  });

  test("вызов и клик", async () => {

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/ингредиенты:/i);
    const button = screen.getByText(/поиск/i);

    fireEvent.change(input, { target: { value: "томаты" } });

    fireEvent.click(button);

    expect(searchRecipesMutationMock).toHaveBeenCalledWith("томаты");
  });
});
