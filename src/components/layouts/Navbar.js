import React from 'react';

const Navbar = ({toggler, theme}) => {
    return (
        <nav className="navbar bg-light">
            <h1>Where in the world?</h1>
            <button className="btn btn-light" onClick={toggler}>{theme === 'light' ? <i className="far fa-moon"></i> : <i className="fas fa-moon"></i>} Dark Mode</button>
        </nav>
    )
}

export default Navbar
