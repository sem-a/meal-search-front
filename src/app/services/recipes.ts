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
    getRecipeForId: builder.query<
      Recipes & {
        _id?: string;
        ingredients: Recipes["ingredients"] & { _id?: string };
      },
      string
    >({
      // получение рецепта по айди
      query: (id) => ({
        url: `/recipes/get/${id}`,
        method: "GET",
      }),
    }),
    getRecipeForUserId: builder.query<
      (Recipes & {
        _id?: string;
        ingredients: Recipes["ingredients"] & { _id?: string };
      })[],
      void
    >({
      // получение рецепта по айди
      query: () => ({
        url: `/recipes/user`,
        method: "GET",
      }),
    }),
    searchRecipes: builder.mutation<Recipes[], string>({
      // поиск рецептов
      query: (ingredients) => ({
        url: `/recipes/search?params=${ingredients}`,
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
        url: `/recipes/edit?id=${data._id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteRecipe: builder.mutation<RecipesData, string>({
      // удалить рецепт
      query: (id) => ({
        url: `/recipes/delete/${id}`,
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
  useSearchRecipesMutation,
  useGetRecipeForUserIdQuery,
} = recipesApi;
