import React, { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  // State to manage category name and GST rate
  const [categoryName, setCategoryName] = useState(''); // State for category name
  const [categoryGST, setCategoryGST] = useState(''); // State for GST rate

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the addCategory function from props with the new category details
    addCategory({ name: categoryName, gst: parseFloat(categoryGST) });
    // Clear the input fields after adding the category
    setCategoryName('');
    setCategoryGST('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields to add category name and GST rate */}
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <input
        type="number"
        value={categoryGST}
        onChange={(e) => setCategoryGST(e.target.value)}
        placeholder="GST Rate"
      />
      {/* Button to submit the form */}
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
