import React from 'react';
import './header.css';

function Header({children}) {
    return (
        <header className = "header">
            <div className="wrapper">
                <h1>Social Media Dashboard</h1>
                <p className = "header__total">Total Followers: 20500</p>
                {children}
            </div>
        </header>
        
    );
}

export default Header;