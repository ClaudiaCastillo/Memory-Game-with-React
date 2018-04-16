// imports React and its components and the logo image (logo.png)
import React, {Component} from 'react';
import logo from './images/logo.png';

// creates a Header class which extends the React component
const Header = (props) => {
    return (
            <header className="App-header">
                <img src={logo} className="App-logo hvr-bounce-in" alt="logo" title="show/hide instructions"/>
                <h1 className="App-title">Clicky Game</h1>
                <p>Score: {props.score}</p>
                <p className="ApIp-intro">Click an image to gain a point.<br/>
                    Do not click an image more than once though or you will have to start over!</p>
            </header>
        );
}
// exports Header class for external use
export default Header;
