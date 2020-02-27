import React from 'react';
import classes from './Projects.module.scss';

const Projects = () => {
  return (
    <div>
      <section className={classes.profileSection}>
        <h2>Projects</h2>
        <ul className={classes.verticalLine}>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>Group Grid</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/GroupGrid"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/GroupGrid"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
							Social media application implemented with the React library and REST interfaces supported with Firebase cloud functions.
            </p>
            <div
              className={[classes.projectImage, classes.groupGrid].join(
                " "
              )}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-react-original" title="REACT" />
                </li>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-sass-original" title="SCSS" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-webpack-plain" title="Webpack" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>Burger Builder</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://burgerbuilder-be355.firebaseapp.com/"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/Burger-Builder"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
							E-commerce application for dynamically building burgers with the ability to create an order that is sent to Firebase.
            </p>
            <div
              className={[classes.projectImage, classes.burgerBuilder].join(
                " "
              )}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-react-original" title="REACT" />
                </li>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-sass-original" title="SCSS" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-webpack-plain" title="Webpack" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>Blog About It</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://blogaboutit.herokuapp.com/"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/BlogAboutIt"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
						Productivity application using React-Router, built with validated Redux forms that save the record to a remote server.
            </p>
            <div
              className={[classes.projectImage, classes.blogAboutIt].join(
                " "
              )}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-react-original" title="REACT" />
                </li>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-sass-original" title="SCSS" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-webpack-plain" title="Webpack" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>React Mini Scripts</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/React_Mini_Scripts"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/React_Mini_Scripts"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
							A library of mini React scripts focusing on one relative topic.
            </p>
            <div
              className={[classes.projectImage, classes.reactMiniScripts].join(" ")}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-react-original" title="REACT" />
                </li>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-sass-original" title="SCSS" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-webpack-plain" title="Webpack" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>Web Portfolio</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="http://kenaustria.herokuapp.com/"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://github.com/KenAustria/WebPortfolio"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
              An aesthetically-pleasing and comprehensive portfolio presenting
              the scope of my credentials.
            </p>
            <div
              className={[classes.projectImage, classes.portfolio].join(" ")}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-react-original" title="REACT" />
                </li>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-sass-original" title="SCSS" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-webpack-plain" title="Webpack" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
					<li
            className={[classes.project, classes.verticalLineContent].join(" ")}
          >
            <div
              className={[classes.projectDescription, classes.bulleted].join(
                " "
              )}
            >
              <div className={classes.projectName}>Free Code Camp Projects</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://codepen.io/kenaustria/pens/public/"
											target="_blank"
											rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </span>
                </li>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
											href="https://github.com/KenAustria/freeCodeCamp_Projects"
											target="_blank"
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
              Front end projects for earned certification.
            </p>
            <div
              className={[classes.projectImage, classes.freeCodeCamp].join(" ")}
            >
              <ul className={classes.projectTech}>
                <li>
                  <i class="devicon-html5-plain" title="HTML5" />
                </li>
                <li>
                  <i class="devicon-css3-plain" title="CSS3" />
                </li>
                <li>
                  <i class="devicon-javascript-plain" title="JavaScript" />
                </li>
                <li>
                  <i class="devicon-visualstudio-plain" title="VS Code" />
                </li>
                <li>
                  <i class="devicon-git-plain" title="Git" />
                </li>
                <li>
                  <i class="devicon-github-plain" title="GitHub" />
                </li>
              </ul>
            </div>
          </li>
				</ul>
      </section>
    </div>
  );
};

export default Projects;
