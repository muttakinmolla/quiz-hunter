import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-3'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand bg-info p-2 rounded text-white" to="/">QUIZ HUNTER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to="/blog">blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-4" to="/static">static</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;