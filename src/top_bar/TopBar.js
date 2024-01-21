import React from 'react';
import classes from './TopBar.module.css';

const Topbar = (props) => {
    const logo = "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol-700x394.jpg";
    return (
      <nav className={classes.Topbar}>
        <img src={logo} alt="Amazon logo"/>
      </nav>
    );
}

export default Topbar;