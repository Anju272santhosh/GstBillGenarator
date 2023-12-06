import React, { useState } from 'react';

const CategoryList = ({ categories, handleDelete, handleGSTUpdate }) => {
  // State to manage new GST values for categories
  const [newGSTValues, setNewGSTValues] = useState(Array(categories.length).fill(''));

  // Function to update a specific new GST value in the state
  const updateNewGSTValue = (index, value) => {
    const updatedValues = [...newGSTValues];
    updatedValues[index] = value;
    setNewGSTValues(updatedValues);
  };

  // Function to handle updating the GST for a category
  const handleGSTUpdateClick = (index) => {
    handleGSTUpdate(index, newGSTValues[index]);
    // Reset the new GST values after updating
    setNewGSTValues(Array(categories.length).fill(''));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Category Name</th>
          <th>GST Rate</th>
          <th>Action</th>
          <th>Update GST</th>
        </tr>
      </thead>
      <tbody>
        {/* Displaying categories and their respective details */}
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.name}</td>
            <td>{category.gst}</td>
            {/* Button to delete a category */}
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
            {/* Input field to update GST and button to trigger the update */}
            <td>
              <input
                type="text"
                value={newGSTValues[index]}
                onChange={(e) => updateNewGSTValue(index, e.target.value)}
              />
              <button onClick={() => handleGSTUpdateClick(index)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
