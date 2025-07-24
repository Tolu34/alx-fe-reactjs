import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({recipe}) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [decription, setDescription] = useState(recipe.decription);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ ...recipe, title, decription });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={descriptiom} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    );
};
export default EditRecipeForm;