import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {recipes.map(recipe => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id} className="mb-4 border p-2 rounded shadow">
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {recipe.title}
            </Link>

            <p>{recipe.description}</p>

            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              className={`mt-2 text-sm px-3 py-1 rounded ${
                isFavorite
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
