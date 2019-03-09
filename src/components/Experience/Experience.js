import React from "react";
import classes from "./Experience.module.scss";

const Experience = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Experience</h2>
        <ul className={classes.verticalLine}>
          <li className={classes.verticalLineContent}>
            <div
              className={[
                classes.bulleted,
                classes.contentHeader,
                classes.timelineHeader
              ].join(" ")}
            >
              <div className={classes.contentTitle}>
                Web Development Instructor
              </div>
              <div className={classes.contentDetails}>March 2019 – Present</div>
            </div>
            <div
              className={[
                classes.bulleted,
                classes.contentSubheader,
                classes.timelineSubheader
              ].join(" ")}
            >
              <div className={classes.subheaderTitle}>
                <a
                  className={classes.profile}
                  href="https://khanlabschool.org/"
                  target="_blank"
                >
                  Khan Lab School
                </a>
              </div>
              <div className={classes.subheaderDetails}>Mountain View, CA</div>
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
                Front-End Software Engineer Intern
              </div>
              <div className={classes.contentDetails}>
                October 2018 – March 2019
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
                <a
                  className={classes.profile}
                  href="https://alz.care"
                  target="_blank"
                >
                  PreSafe: AlzCare Labs
                </a>
              </div>
              <div className={classes.subheaderDetails}>Menlo Park, CA</div>
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
                Software Engineer Intern
              </div>
              <div className={classes.contentDetails}>
                January 2016 – September 2016
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
                <a
                  className={classes.profile}
                  href="https://www.cureus.com/"
                  target="_blank"
                >
                  Cureus
                </a>
              </div>
              <div className={classes.subheaderDetails}>San Francisco, USA</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Experience;
