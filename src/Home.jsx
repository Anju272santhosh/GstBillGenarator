import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import Bill from './Bill';
import './styles.css'; 

const Home = () => {
  return (
    <div className="container">
      {/* Set up the router for navigation */}
      <Router>
        {/* Navigation bar */}
        <div className="navbar">
          <ul>
            {/* Links to different sections of the GST System */}
            <li>
              <Link to="/add-category">Add Category</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/generate-bill">Generate Bill</Link>
            </li>
          </ul>
        </div>

        {/* Main content area */}
        <div className="content">
          <h2>Welcome to the GST System!</h2>
          <p>
            This is the homepage of our GST System. You can navigate using the links above.
          </p>
          {/* This area can display additional content or instructions */}
        </div>

        {/* Define routes for each section */}
        <Route path="/add-category" component={CategoryForm} />
        <Route path="/add-product" component={ProductForm} />
        <Route path="/generate-bill" component={Bill} />
      </Router>
    </div>
  );
};

export default Home;
