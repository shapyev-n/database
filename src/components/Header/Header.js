import React from 'react';
import '../../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <h1>JS35</h1>
                    <nav>
                        <Link
                        to='/'>Home</Link>
                        <a href="#">Basket</a>
                        <Link to='/admin'>Admin</Link>

                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;