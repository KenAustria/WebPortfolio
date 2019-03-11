import React from "react";
import classes from "./Projects.module.scss";

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
              <div className={classes.projectName}>Burger Builder</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="https://burgerbuilder-be355.firebaseapp.com/"
                      target="_blank"
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
                    >
                      Source
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <p className={classes.projectInfo}>
              A React-Redux application for building burgers with the ability to
              create an order that is sent to Firebase.
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
              <div className={classes.projectName}>Web Portfolio</div>
              <ul className={classes.projectDetails}>
                <li>
                  <span class="project-details-label">
                    <a
                      className={classes.profile}
                      href="http://kenaustria.com"
                      target="_blank"
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
          {/* <li className={classes.project}>
						<div className={[classes.projectImage, classes.danTheWeatherMan].join(' ')}>
							<ul className={classes.projectTech}>
								<li>
									<i class="devicon-react-original" title="REACT"></i>
								</li>
								<li>
									<i class="devicon-html5-plain" title="HTML5"></i>
								</li>
								<li>
									<i class="devicon-css3-plain" title="CSS3"></i>
								</li>
								<li>
									<i class="devicon-sass-original" title="SCSS"></i>
								</li>
								<li>
									<i class="devicon-javascript-plain" title="JavaScript"></i>
								</li>
								<li>
									<i class="devicon-webpack-plain" title="Webpack"></i>
								</li>
								<li>
									<i class="devicon-visualstudio-plain" title="VS Code"></i>
								</li>
								<li>
									<i class="devicon-git-plain" title="Git"></i>
								</li>
								<li>
									<i class="devicon-github-plain" title="GitHub"></i>
								</li>
							</ul>
						</div>
						<div className={classes.projectDescription}>
							<div className={classes.projectName}>Dan The Weather Man</div>
							<ul className={classes.projectDetails}>
								<li>
									<span class="project-details-label">
										<a className={classes.profile} href="http://dantheweatherman.herokuapp.com/" target="_blank">
											Live
										</a>
									</span>
								</li>
								<li>
									<span class="project-details-label">
										<a className={classes.profile} href="https://github.com/KenAustria/DanTheWeatherMan" target="_blank">
											Source
										</a>
									</span>
								</li>
							</ul>
            </div>
						<p>
						A React-Redux weather forecast web application, using asynchronous calls with Axios.
            </p>
					</li>
					<li className={classes.project}>
						<div className={[classes.projectImage, classes.blogAboutIt].join(' ')}>
							<ul className={classes.projectTech}>
								<li>
									<i class="devicon-react-original" title="REACT"></i>
								</li>
								<li>
									<i class="devicon-html5-plain" title="HTML5"></i>
								</li>
								<li>
									<i class="devicon-css3-plain" title="CSS3"></i>
								</li>
								<li>
									<i class="devicon-sass-original" title="SCSS"></i>
								</li>
								<li>
									<i class="devicon-javascript-plain" title="JavaScript"></i>
								</li>
								<li>
									<i class="devicon-webpack-plain" title="Webpack"></i>
								</li>
								<li>
									<i class="devicon-visualstudio-plain" title="VS Code"></i>
								</li>
								<li>
									<i class="devicon-git-plain" title="Git"></i>
								</li>
								<li>
									<i class="devicon-github-plain" title="GitHub"></i>
								</li>
							</ul>
						</div>
						<div className={classes.projectDescription}>
							<div className={classes.projectName}>Blog About It</div>
							<ul className={classes.projectDetails}>
								<li>
									<span class="project-details-label">
										<a className={classes.profile} href="https://blogaboutit.herokuapp.com/" target="_blank">
											Live
										</a>
									</span>
								</li>
								<li>
									<span class="project-details-label">
										<a className={classes.profile} href="https://github.com/KenAustria/BlogAboutIt" target="_blank">
											Source
										</a>
									</span>
								</li>
							</ul>
            </div>
						<p>
						A multi-page web React-Redux application using React-Router, built with validated forms from Redux Form that saves the record to a remote server.
            </p>
					</li> */}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
