import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <div className="topbar-wrap">
    <div className="topbar is-sticky">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a className="topbar-logo" href="./"><h1 style={{ color: 'white', fontSize: 25 }}>SimpliCron</h1></a>
          <ul className="topbar-nav">
            <li className="topbar-nav-item relative">
              <span className="user-welcome d-none d-lg-inline-block">Welcome! Stefan Harary</span>
            </li>
            {/* .topbar-nav-item */}
          </ul>
          {/* .topbar-nav */}
        </div>
      </div>
      {/* .container */}
    </div>
    <Navigation />
  </div>
);
export default Header;
