import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  // Add a recipe and re-filter
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Replace all recipes and re-filter
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  // Update a recipe and re-filter
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Delete a recipe and re-filter
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Set search term and filter results
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes based on searchTerm
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));

export default useRecipeStore;
