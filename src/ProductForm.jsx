import React, { useState } from 'react';

const ProductForm = ({ categories, addProduct }) => {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name: productName, category: selectedCategory, price: parseFloat(productPrice), tax: calculateTax(selectedCategory, parseFloat(productPrice)) });
    setProductName('');
    setSelectedCategory('');
    setProductPrice('');
  };

  const calculateTax = (category, price) => {
    // Logic to calculate tax based on category and price
    // Replace this with your own tax calculation logic
    // For example:
    if (category === 'Electronics') {
      return price * 0.2; // Assuming 20% tax for Electronics
    } else if (category === 'Food') {
      return price * 0.05; // Assuming 5% tax for Food
    } else {
      return price * 0.1; // Default 10% tax for other categories
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
      <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Product Price" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;