import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ prevents page reload

    updateRecipe({
      ...recipe,
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border p-2 w-full mb-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
