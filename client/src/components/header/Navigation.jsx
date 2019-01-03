import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../utils/auth';

const Navigation = () => (
  <div className="navbar">
    <div className="container">
      <div className="d-lg-flex justify-content-between align-items-center w-100">
        <ul className="navbar-menu">
          <li>
            <Link to="/jobs">
              <em className="ikon ikon-dashboard" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/create-job">
              <em className="ikon ikon-coins" />
              Create Jobs
            </Link>

          </li>
        </ul>
        <ul className="navbar-btns">
          <li><button type="button" onClick={logoutUser} className="btn btn-sm btn-outline btn-light"><span>Logout</span></button></li>
        </ul>
      </div>
    </div>
    {/* .container */}
  </div>
);
export default Navigation;
