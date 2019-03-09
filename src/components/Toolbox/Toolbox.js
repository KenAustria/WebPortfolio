import React from "react";
import classes from "./Toolbox.module.scss";

const Toolbar = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Toolbox</h2>
        <ul className={classes.verticalLine}>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>Software</div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              <ul className={classes.contentSkillList}>
                <li>Atlassian Confluence</li>
                <li>Zeplin</li>
                <li>JIRA Agile Management Tools</li>
              </ul>
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>Skills</div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              <ul className={classes.contentSkillList}>
                <li>Gitflow WorkFlow Branching Model</li>
                <li>Version Control</li>
                <li>Responsive Design</li>
                <li>Testing</li>
                <li>Debugging</li>
              </ul>
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>Front End</div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              <ul className={classes.contentSkillList}>
                <li>HTML5</li>
                <li>CSS3/SCSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </div>
          </li>
          <li className={classes.verticalLineContent}>
            <div
              className={[classes.bulleted, classes.contentHeader].join(" ")}
            >
              <div className={classes.contentTitle}>Tooling</div>
            </div>
            <div
              className={[classes.bulleted, classes.contentSubheader].join(" ")}
            >
              <ul className={classes.contentSkillList}>
                <li>Webpack</li>
                <li>Git</li>
                <li>Node Package Manager</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Toolbar;
