import { useParams } from 'react-router-dom';

import  useRecipeStore  from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
     const { id } = useParams()
    const recipe = useRecipeStore(state  =>
        state.recipes.find(recipe => recipe.id === Number(Id))
    );

    if (!recipe) return <p>Recipe not found.</p>
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
             <EditRecipeForm recipe={recipe.id} />
             <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
};
export default RecipeDetails;