import React, { useState } from 'react';

const CategoryList = ({ categories, handleDelete, handleGSTUpdate }) => {
  const [newGSTValues, setNewGSTValues] = useState(Array(categories.length).fill(''));

  const updateNewGSTValue = (index, value) => {
    const updatedValues = [...newGSTValues];
    updatedValues[index] = value;
    setNewGSTValues(updatedValues);
  };

  const handleGSTUpdateClick = (index) => {
    handleGSTUpdate(index, newGSTValues[index]);
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
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.name}</td>
            <td>{category.gst}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
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
