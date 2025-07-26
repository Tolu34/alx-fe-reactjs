import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="mb-4 border p-2 rounded shadow">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
