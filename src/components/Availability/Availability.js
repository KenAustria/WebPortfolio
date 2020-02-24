import React from 'react';
import classes from './Availability.module.scss';

const Availability = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Availability</h2>
        <ul className={classes.verticalLine}>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>
                Are you legally eligible to work in the United States?
              </div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              Yes, I'm a US citizen.
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>
                Are you willing to relocate within the United States?
              </div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              Yes, I'm open to relocate to Los Angeles, Seattle, Austin, and New York.
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>
                Are you willing to relocate outside the United States?
              </div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              Absolutely! For the right opportunity I'm willing to relocate.
            </div>
          </li>
					<li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>
								Which job type arrangement are you open to?
              </div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              I’m interested in a full-time, part-time, or contract position that’s either onsite or remote.
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Availability;
