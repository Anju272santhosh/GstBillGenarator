import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import Bill from './Bill';
import './styles.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="container">
      <Router>
        <div className="navbar">
          <ul>
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

        <div className="content">
          <h2>Welcome to the GST System!</h2>
          <p>
            This is the homepage of our GST System. You can navigate using the links above.
          </p>

          {/* Additional content for the home page */}
        </div>

        <Route path="/add-category" component={CategoryForm} />
        <Route path="/add-product" component={ProductForm} />
        <Route path="/generate-bill" component={Bill} />
      </Router>
    </div>
  );
};

export default Home;
