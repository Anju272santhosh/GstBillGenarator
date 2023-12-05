import React from 'react';

const CategoryList = ({ categories }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category Name</th>
          <th>GST Rate</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.name}</td>
            <td>{category.gst}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
