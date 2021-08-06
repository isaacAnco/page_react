import React, { Fragment } from 'react';
import { Navigation } from '../Navigation/Navigation';
import classes from './Header.module.css';

export function Header() {
  return (
    <Fragment>
      <header className={classes.cont}>
        <Navigation />
        <div className={classes.group}>
          <div className={classes.input}>
            <h2>
              the best stock photos and videos <br /> share by talent creators
            </h2>
            <div>
              <input type='text' />
            </div>
            <div>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
