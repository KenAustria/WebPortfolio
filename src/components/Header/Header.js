import React from 'react';
import classes from './Header.module.scss';
import { faHandshake, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className={classes.appPortfolioContainer}>
      <div className={classes.appPortfolio}>
				<section className={classes.portfolioResume}>
          <a
						target="_blank"
						rel="noopener noreferrer"
            href="mailto:kenaustriadev@gmail.com"
          >
            <span className={classes.resumeDownload}>
              <FontAwesomeIcon icon={faHandshake} /> Hire Me
            </span>
          </a>
        </section>
        <section className={classes.portfolioTitleContainer}>
          <div className={classes.portfolioTitle}>
            <h1 className={classes.portfolioTitleTop}>
              <span className={classes.portfolioTitleUpper}>kenneth pangilinan</span>
              <span className={classes.portfolioTitleLower}>
                front end engineer
              </span>
            </h1>
          </div>
        </section>
				<section className={classes.portfolioResume}>
          <a
						target="_blank"
						rel="noopener noreferrer"
            href="https://linktr.ee/kenaustriadev"
          >
            <span className={classes.resumeDownload}>
              <FontAwesomeIcon icon={faLink} /> Contact Links
            </span>
          </a>
        </section>
        {/* <nav className={classes.portfolioContact}>
          <ul className={classes.portfolioContactList}>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://www.google.ca/maps/place/San+Francisco,+CA"
								target="_blank"
								rel="noopener noreferrer"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faMapPin} fixedWidth />
              </a>
            </li>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://www.linkedin.com/in/kenaustria/"
								target="_blank"
								rel="noopener noreferrer"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
              </a>
            </li>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://github.com/KenAustria"
								target="_blank"
								rel="noopener noreferrer"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
