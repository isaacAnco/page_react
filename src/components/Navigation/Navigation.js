import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icon';
import classes from './Navigation.module.css';

export function Navigation() {
  const [showEvent, setShowEvent] = useState(true);

  const showIconHandler = () => {
    setShowEvent((showIcon) => {
      if (showIcon) return false;
      if (!showIcon) return true;
    });
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <NavLink to='/'>logo</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li onClick={showIconHandler} className={classes.icon}>
          icon
          {!showEvent && <Icon />}
        </li>
        <li className={classes.btn_p}>
          <NavLink to='/join' className={classes.btn}>join</NavLink>
        </li>
      </ul>
    </nav>
  );
}
