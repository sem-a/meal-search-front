import recipesReducer, { selectRecipes, InitialState } from "./recipesSlice";
import { RootState } from "../../app/store";

// Мокаем весь модуль recipesApi
jest.mock("../../app/services/recipes", () => ({
  recipesApi: {
    endpoints: {
      getAllRecipes: {
        matchFulfilled: (action: any) => action.type === "recipesApi/executeQuery/fulfilled"
      }
    }
  }
}));

describe("recipesSlice", () => {
  const mockRecipesData = {
    recipes: [
      {
        _id: "1",
        title: "Паста Карбонара",
        description: "Итальянское блюдо",
        cuisine: "Итальянская",
        ingredients: [
          { name: "Спагетти", quantity: "200", unit: "г" },
        ],
        steps: ["Шаг 1", "Шаг 2"],
        photo: "pasta.jpg",
      },
    ],
  };

  it("должен возвращать начальное состояние", () => {
    expect(recipesReducer(undefined, { type: "unknown" })).toEqual({
      recipes: null,
    });
  });

  it("должен обрабатывать getAllRecipes.fulfilled", () => {
    const action = {
      type: "recipesApi/executeQuery/fulfilled",
      payload: mockRecipesData,
    };
    const newState = recipesReducer(undefined, action);
    expect(newState).toEqual({
      recipes: mockRecipesData,
    });
  });

  it("селектор selectRecipes возвращает данные", () => {
    const mockState = {
      recipes: { recipes: mockRecipesData },
    } as RootState;

    expect(selectRecipes(mockState)).toEqual({ recipes: mockRecipesData });
  });
});