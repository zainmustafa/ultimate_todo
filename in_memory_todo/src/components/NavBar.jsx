import React from 'react';

const NavBar = ({ totalTodos }) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                Total Todos 
                <span className="badge badge-pill badge-secondary m-2">
                    {totalTodos}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;