import React from "react";
import classes from "./Header.module.scss";
import { faDownload, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className={classes.appPortfolioContainer}>
      <div className={classes.appPortfolio}>
        <section className={classes.portfolioResume}>
          <a
            href="https://www.slideshare.net/KennethAustriaPangil/front-end-react-engineer-developer-130830935"
            target="_blank"
          >
            <span className={classes.resumeDownload}>
              <FontAwesomeIcon icon={faDownload} /> Resume
            </span>
          </a>
        </section>
        <section className={classes.portfolioTitleContainer}>
          <div className={classes.portfolioTitle}>
            <h1 className={classes.portfolioTitleTop}>
              <span className={classes.portfolioTitleUpper}>ken austria</span>
              <span className={classes.portfolioTitleLower}>
                front end engineer
              </span>
            </h1>
          </div>
        </section>
        <nav className={classes.portfolioContact}>
          <ul className={classes.portfolioContactList}>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://www.google.ca/maps/place/San+Francisco,+CA"
                target="_blank"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faMapPin} fixedWidth />
              </a>
            </li>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://www.linkedin.com/in/kenaustria/"
                target="_blank"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
              </a>
            </li>
            <li className={classes.portfolioContactListItem}>
              <a
                href="https://github.com/KenAustria"
                target="_blank"
                className={classes.SocialIcon}
              >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
