import React from 'react';

const CategoryList = ({ categories, handleDelete, handleGSTUpdate }) => {
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
              <button onClick={() => handleGSTUpdate(index)}>Update GST</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
