import React from 'react';

const navBar = () => {
    return (
        <div>
            <nav>

                    <div class = "dropdown">
                        <button class = "dropbtn"> Dropdown 101
                        <i class=" fa fa-caret-down"></i>
                        </button>
                        <div class ="dropdown-content">
                            <a href="/"> Home</a>
                            <a href="/page1">Roulette</a>
                            <a href="/page2">About You</a>
                            <a href="/page3">Restricted Access</a>
                    </div>
            </div>
            </nav>
        </div>
    );
};

export default navBar;