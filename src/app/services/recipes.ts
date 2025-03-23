import { Recipes, RecipesData } from "../../features/recipes/recipesSlice";
import { api } from "./api";

export const recipesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipes: builder.query<RecipesData, void>({
      // получение всех рецептов
      query: () => ({
        url: "/recipes",
        method: "GET",
      }),
    }),
    getRecipeForId: builder.query<RecipesData, string>({
      // получение рецепта по айди
      query: (id) => ({
        url: `/recipes/${id}`,
        method: "GET",
      }),
    }),
    addRecipe: builder.mutation<RecipesData, Recipes>({
      // добавить рецепт
      query: (data) => ({
        url: "/recipes/add",
        method: "POST",
        body: data,
      }),
    }),
    editRecipe: builder.mutation<RecipesData, Recipes>({
      // изменить рецепт
      query: (data) => ({
        url: "/recipes/edit",
        method: "PUT",
        body: data,
      }),
    }),
    deleteRecipe: builder.mutation<RecipesData, string>({
      // удалить рецепт
      query: (id) => ({
        url: `/recipes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllRecipesQuery,
  useGetRecipeForIdQuery,
  useAddRecipeMutation,
  useEditRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
