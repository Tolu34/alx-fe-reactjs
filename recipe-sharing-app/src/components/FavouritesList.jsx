import React from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoritesRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favoritesRecipes.map(recipe => (
          <div key={recipe.id} className="mb-4 border p-2 rounded shadow">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
