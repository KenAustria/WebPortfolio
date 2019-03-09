import React from "react";
import classes from "./Profile.module.scss";
import Header from "../Header/Header";
import Bio from "../Bio/Bio";
import Toolbox from "../Toolbox/Toolbox";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Availability from "../Availability/Availability";
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
          <Bio />
          <Toolbox />
          <Experience />
					<Education />
					<Availability />
        </div>
      </article>
    </Scrollbars>
  );
};

export default Profile;
