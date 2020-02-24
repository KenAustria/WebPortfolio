import React from 'react';
import classes from './Education.module.scss';

const Education = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Education</h2>
        <ul className={classes.verticalLine}>
					<li className={classes.verticalLineContent}>
            <div
              className={[
                classes.bulleted,
                classes.contentHeader,
                classes.timelineHeader
              ].join(" ")}
            >
              <div className={classes.contentTitle}>App Academy</div>
              <div className={classes.contentDetails}>2019</div>
            </div>
            <div
              className={[
                classes.bulleted,
                classes.contentSubheader,
                classes.timelineSubheader
              ].join(" ")}
            >
              <div className={classes.subheaderTitle}>
								Software Training Institute
              </div>
              <div className={classes.subheaderDetails}>Live Online</div>
            </div>
          </li>
					<li className={classes.verticalLineContent}>
            <div
              className={[
                classes.bulleted,
                classes.contentHeader,
                classes.timelineHeader
              ].join(" ")}
            >
              <div className={classes.contentTitle}>freeCodeCamp</div>
              <div className={classes.contentDetails}>2017</div>
            </div>
            <div
              className={[
                classes.bulleted,
                classes.contentSubheader,
                classes.timelineSubheader
              ].join(" ")}
            >
              <div className={classes.subheaderTitle}>
                Front-End Development Certificate
              </div>
              <div className={classes.subheaderDetails}>Online</div>
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[
                classes.bulleted,
                classes.contentHeader,
                classes.timelineHeader
              ].join(" ")}
            >
              <div className={classes.contentTitle}>
                California State University: Sacramento
              </div>
              <div className={classes.contentDetails}>
                2010
              </div>
            </div>
            <div
              className={[
                classes.bulleted,
                classes.contentSubheader,
                classes.timelineSubheader
              ].join(" ")}
            >
              <div className={classes.subheaderTitle}>
                Bachelor of Arts: Psychology
              </div>
              <div className={classes.subheaderDetails}>Sacramento, USA</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Education;
