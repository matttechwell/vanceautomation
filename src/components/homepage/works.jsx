import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="./flowaccount.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">FlowAccount</div>
							<div className="work-subtitle">
							Sr. QA Automation Engineer
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./refinitiv.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Refinitiv</div>
							<div className="work-subtitle">
								Sr. QA Automation Engineer
							</div>
							<div className="work-duration">Apr 2023 - Jan 2024</div>
						</div>

						<div className="work">
							<img
								src="./fuse.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FUSE InsurTech</div>
							<div className="work-subtitle">
								Sr. Quality Assurance
							</div>
							<div className="work-duration">Feb 2023 - Mar 2023</div>
						</div>

						<div className="work">
							<img
								src="./lunchactually.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Lunch Actually</div>
							<div className="work-subtitle">
								Quality Assurance 
							</div>
							<div className="work-duration">Jan 2021 - Dec 2022 </div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
