import React, { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryGST, setCategoryGST] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ name: categoryName, gst: parseFloat(categoryGST) });
    setCategoryName('');
    setCategoryGST('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Category Name" />
      <input type="number" value={categoryGST} onChange={(e) => setCategoryGST(e.target.value)} placeholder="GST Rate" />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
