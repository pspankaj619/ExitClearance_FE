import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MainScreen.css';

const MainScreen = ({ userRole }) => {
  return (
    <div className="main-screen">
      <h1>Welcome to Exit Clearance App</h1>
      {userRole === 'employee' && (
        <div>
          <h2>Employee Menu</h2>
          <ul>
            <li>
              <Link to="/initiate-self-form">Initiate Self Form</Link>
            </li>
          </ul>
        </div>
      )}
      {userRole === 'hr' && (
        <div>
          <h2>HR Menu</h2>
          <ul>
            <li>
              <Link to="/initiate-self-form">Initiate Self Form</Link>
            </li>
            <li>
              <Link to="/initiate-form">Initiate Form</Link>
            </li>
            <li>
              <Link to="/view-approval-list">View Approval List</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      )}
      {userRole === 'superuser' && (
        <div>
          <h2>Super User Menu</h2>
          <ul>
            <li>
              <Link to="/initiate-self-form">Initiate Self Form</Link>
            </li>
            <li>
              <Link to="/initiate-form">Initiate Form</Link>
            </li>
            <li>
              <Link to="/view-approval-list">View Approval List</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainScreen;
