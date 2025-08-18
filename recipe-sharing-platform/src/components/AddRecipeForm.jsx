import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle submission logic here
      console.log('Form data:', formData);
      setSubmissionStatus('Recipe submitted successfully!');
      setFormData({ title: '', ingredients: '', steps: '' }); // Clear form
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmissionStatus('Please correct the errors and try again.');
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }
    return newErrors;
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-center my-6 text-gray-800">Submit a New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        {submissionStatus && (
          <div className={`p-3 mb-4 rounded-md text-center font-semibold ${submissionStatus.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {submissionStatus}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
          />
          {errors.title && <p className="text-red-500 text-xs italic mt-1">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            placeholder="List each ingredient on a new line."
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs italic mt-1">{errors.ingredients}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="steps" className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            placeholder="Describe the steps in order."
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-xs italic mt-1">{errors.steps}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;