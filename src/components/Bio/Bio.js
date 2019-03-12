import React from 'react';
import classes from './Bio.module.scss';

const Bio = () => {
  return (
    <div className={classes.profileSection}>
      <h1 className={classes.profileTitle}>ken austria</h1>
      <p>
        Hello! I'm Ken, a front-end engineer based in San Francisco, USA.
        Positioned to utilize solid design and conceptual skills to meet and
        exceed organizational targets. In a deeply immersive agile development
        setting, I thrive on quick iterations, transparent communication during
        stand-up meetings, and quality pairing when necessary. I've gained
        hands-on experience in identifying areas of optimization and injected my
        own opinions on how things can be improved beyond specifications. Feel
        free to get in touch!
      </p>
    </div>
  );
};

export default Bio;
