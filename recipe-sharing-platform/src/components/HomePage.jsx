// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json'; // Import the JSON data

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipesData.recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{recipe.name}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;