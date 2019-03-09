import React from "react";
import classes from "./Profile.module.scss";
import Header from "../Header/Header";
import Summary from "../Summary/Summary";
import Toolbox from "../Toolbox/Toolbox";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import { Scrollbars } from "react-custom-scrollbars";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <Scrollbars autoHide autoHeightMin={`calc(100vh - 120px)`}>
      <a href="#top" className={classes.stickyDefault}>
        <div className={classes.stickyButton}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </a>
      <a href="#top-mobile" className={classes.stickyMobile}>
        <div className={classes.stickyButton}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </a>
      <a name="top-mobile" />
      <Header />
      <a name="top" />
      <article className={classes.appProfile}>
        <div className={classes.appProfileContent}>
          <Summary />
          <Toolbox />
          <Experience />
					<Education />
        </div>
      </article>
    </Scrollbars>
  );
};

export default Profile;
