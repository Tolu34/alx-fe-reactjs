import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore'; 

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="mb-4 border p-2 rounded shadow">
          <Link to={`/recipe/${recipe.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
            {recipe.title}
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
