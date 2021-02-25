import React from 'react';
import {Link} from 'react-router-dom'
const navBar = () => {
    return (
        <div>
            <nav>

                    <div class = "dropdown">
                        <button class = "dropbtn"> Dropdown 101
                        <i class=" fa fa-caret-down"></i>
                        </button>
                        <div class ="dropdown-content">
                        <Link to = "/"> Home </Link>
                        <Link to = "/page1">Roulette </Link>
                        <Link to = "/page2">About You </Link>
                        <Link to = "/page3">Restricted Access</Link>
                    </div>
            </div>
            </nav>
        </div>
    );
};

export default navBar;