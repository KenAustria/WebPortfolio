import React from 'react';
import classes from './Portfolio.module.scss';
import Profile from '../Profile/Profile';

const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <Profile />
    </div>
  );
};

export default Portfolio;
