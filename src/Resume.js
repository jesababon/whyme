import React from "react";
import Tabs from "@cmsgov/design-system/dist/components/Tabs/Tabs";
import TabPanel from "@cmsgov/design-system/dist/components/Tabs/TabPanel";
import Iframe from "react-iframe";
import savvy from "./images/savvysapian.gif";
import fea from "./images/fatalencounters.gif";

class Resume extends React.Component {
	render() {
		return (
				<Tabs>
					<TabPanel id="resume" tab="Resume">
						<Iframe
							url="https://docs.google.com/document/d/e/2PACX-1vT6IGAuO46JJjsERkOCnlJzIL7Z6mq8yz4-5IyO5jJt5Ky_xLqX7LchS2xCS3hEzA9MswmFXE_PHv6N/pub?embedded=true"
							display="flex"
							flex-direction="column"
							id="resume"
							className="ds-u-overflow--scroll"
						/>
					</TabPanel>
					<TabPanel id="project1" tab="Project 1">
						<h2 className="ds-h4" id="unordered-list-id">
							This React Site
						</h2>
						<ul className="ds-c-list" aria-labelledby="unordered-list-id">
							<li>
								Built in a few days to show ability to dive into design.cms.gov
								standards.
							</li>
							<li>HTML, CSS, and React.js</li>
							<li>Accessibility reviewed using react-axe.</li>
						</ul>
					</TabPanel>
					<TabPanel id="project2" tab="Project 2">
						<h2 className="ds-h4" id="unordered-list-id">
							Savvy Sapian
						</h2>
						<ul className="ds-c-list" aria-labelledby="unordered-list-id">
							<li>
								Geo-location based artistic events suggestion using Artsy and
								Artbeat API.
							</li>
							<li>
								HTML, CSS, React.js, Express.js, Google Maps API, Arsty
								API/JSON, Artbeat API/XML
							</li>
						</ul>
						<div className="ds-u-text-align--center">
							<a href="https://github.com/jesababon/savvysapian" target="_blank">
							<img src={savvy} className="Projects" alt="logo" />
							</a>
						</div>
					</TabPanel>
					<TabPanel id="project3" tab="Project 3">
						<h2 className="ds-h4" id="unordered-list-id">
							Fatal Encounters
						</h2>
						<ul className="ds-c-list" aria-labelledby="unordered-list-id">
							<li>
								Data visualization Express.js app utlizing database of
								police-related homicides.
							</li>
							<li>HTML, CSS, Express.js, PostgreSQL, Google Maps API </li>
						</ul>
						<div className="ds-u-text-align--center">
							<a href="https://github.com/jesababon/fea" target="_blank">
							<img src={fea} className="Projects" alt="logo" />
							</a>
						</div>
					</TabPanel>
				</Tabs>
		);
	}
}

export default Resume;
