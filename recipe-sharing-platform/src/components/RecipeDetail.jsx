import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json'; // Ensure this path is correct

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by its ID
    const foundRecipe = recipesData.recipes.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
            <p className="text-gray-600 mb-6">{recipe.description}</p>
            <img src={recipe.image} alt={recipe.name} className="w-full h-auto rounded-lg mb-6" />
          </div>
          <div className="md:w-1/2 p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
              <ul className="list-disc pl-5 text-gray-600">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-1">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions</h2>
              <ol className="list-decimal pl-5 text-gray-600">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;