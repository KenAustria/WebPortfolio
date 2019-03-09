import React from 'react';
import classes from './Availability.module.scss';

const Availability = () => {
	return (
		<div>
			<section className={classes.profileSection}>
				<h2>Availability</h2>
				<ul className={classes.verticalLine}>
					<li className={classes.verticalLineContent}>
						<div className={[classes.bulleted, classes.contentHeader ].join(' ')}>
							<div className={classes.contentTitle}>Are you legally eligible to work in the United States?</div>
						</div>
						<div className={[classes.bulleted, classes.contentSubheader ].join(' ')}>
							Yes, I'm a US citizen.
						</div>
					</li>
					<li className={classes.verticalLineContent}>
						<div className={[classes.bulleted, classes.contentHeader ].join(' ')}>
							<div className={classes.contentTitle}>Are you willing to relocate within the United States?</div>
						</div>
						<div className={[classes.bulleted, classes.contentSubheader ].join(' ')}>
							Yes, I'm open to relocate to Los Angeles, CA; Seattle, WA; Austin, TX; New York, NY.
						</div>
					</li>
					<li className={classes.verticalLineContent}>
						<div className={[classes.bulleted, classes.contentHeader ].join(' ')}>
							<div className={classes.contentTitle}>Are you willing to relocate outside the United States?</div>
						</div>
						<div className={[classes.bulleted, classes.contentSubheader ].join(' ')}>
							For the right opportunity I am definitely willing to relocate or work remotely.
						</div>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default Availability;