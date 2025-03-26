import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { recipesApi } from "../../app/services/recipes";

export interface Recipes {
  _id?: string;
  title: string;
  description: string;
  cuisine: string;
  ingredients: {
    _id?: string;
    name: string;
    quantity: string;
    unit: string;
  }[];
  steps: string[];
  photo: string;
  user?: string;
}

export interface RecipesData {
  message: string;
  recipes: Recipes[];
}

interface InitialState {
  recipes: RecipesData | null;
}

const initialState: InitialState = {
  recipes: null,
};

const slice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers(builder) {
    builder.addMatcher(
      recipesApi.endpoints.getAllRecipes.matchFulfilled,
      (state, action) => {
        state.recipes = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectRecipes = (state: RootState) => state.recipes;
