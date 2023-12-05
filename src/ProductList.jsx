import React from 'react';

const ProductList = ({ products, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Tax</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.quantity || 1}</td>
            <td>{product.tax}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
