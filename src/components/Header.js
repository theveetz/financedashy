import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <h1 className="text-light">Finance Dashboard</h1>
        <nav>
          <ul className="list-inline text-light">
            <li className="list-inline-item"><a className="text-light" href="/">Home</a></li>
            <li className="list-inline-item"><a className="text-light" href="/transactions">Transactions</a></li>
            <li className="list-inline-item"><a className="text-light" href="/analytics">Analytics</a></li>
            <li className="list-inline-item"><a className="text-light" href="/profile">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

