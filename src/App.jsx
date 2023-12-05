import React, { useState, useEffect } from 'react';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

const App = () => {
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Add a new category to the state and local storage
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  // Add a new product to the state and local storage
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Update local storage whenever categories or products change
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <h1>GST System</h1>

      {/* Category Form to add a new category */}
      <h2>Add Category</h2>
      <CategoryForm addCategory={addCategory} />

      {/* Display Categories */}
      <h2>Categories</h2>
      <CategoryList categories={categories} />

      {/* Product Form to add a new product */}
      <h2>Add Product</h2>
      <ProductForm categories={categories} addProduct={addProduct} />

      {/* Display Products */}
      <h2>Products</h2>
      <ProductList products={products} />

    </div>
  );
};

export default App;
