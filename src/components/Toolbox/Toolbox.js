import React from 'react';
import classes from './Toolbox.module.scss';

const Toolbar = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Toolbox</h2>
        <ul className={classes.verticalLine}>
					<li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Industry</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
								<li>Agile Methodologies</li>
                <li>Algorithms & Data Structures</li>
                <li>Responsive Web Design</li>
								<li>Object Oriented Programming</li>
								<li>Test Driven Development</li>
								<li>Git Branching Model</li>
              </ul>
						</div>
          </li>
					<li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Tools & Technologies</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
								<li>Chrome Developer Tools</li>
                <li>RESTful Web Services</li>
                <li>Ajax</li>
								<li>Webpack</li>
								<li>Node Package Manager</li>
              </ul>
						</div>
          </li>
					<li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Client</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
								<li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
								<li>React</li>
								<li>Redux</li>
              </ul>
						</div>
          </li>
					<li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Server</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
                <li>PostgreSQL</li>
								<li>NoSQL</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
								<li>NodeJS</li>
								<li>Express</li>
								<li>Firebase</li>
								<li>Cloud Firestore</li>
              </ul>
						</div>
          </li>
          {/* <li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Software</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
								<li>JIRA Agile Management Tools</li>
                <li>Atlassian Confluence</li>
                <li>Zeplin</li>
              </ul>
						</div>
          </li> */}
          {/* <li className={classes.verticalLineContent}>
            <div className={[classes.bulleted, classes.contentHeader].join(' ')}>
              <div className={classes.contentTitle}>Skills</div>
            </div>
            <div className={[classes.bulleted, classes.contentSubheader].join(' ')}>
              <ul className={classes.contentSkillList}>
								<li>Gitflow WorkFlow Branching Model</li>
                <li>Responsive Design</li>
                <li>Version Control</li>
                <li>Debugging</li>
                <li>Testing</li>
              </ul>
						</div>
					</li> */}
					{/* <li className={classes.verticalLineContent}>
						<div className={[classes.bulleted, classes.contentHeader].join(" ")}>
							<div className={classes.contentTitle}>Front End</div>
						</div>
						<div className={[classes.bulleted, classes.contentSubheader].join(" ")}>
							<ul className={classes.contentSkillList}>
								<li>HTML5</li>
								<li>CSS3/SCSS</li>
								<li>JavaScript</li>
								<li>React</li>
								<li>Redux</li>
							</ul>
						</div>
					</li> */}
					{/* <li className={classes.verticalLineContent}>
						<div className={[classes.bulleted, classes.contentHeader].join(" ")}>
							<div className={classes.contentTitle}>Tooling</div>
						</div>
						<div className={[classes.bulleted, classes.contentSubheader].join(" ")}>
							<ul className={classes.contentSkillList}>
								<li>Webpack</li>
								<li>Git</li>
								<li>Node Package Manager</li>
							</ul>
						</div>
					</li> */}
				</ul>
			</section>
		</div>
	);
};

export default Toolbar;