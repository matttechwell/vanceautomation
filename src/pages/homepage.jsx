import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const imageContainerRef = useRef(null); // Ref for the image container

	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		// Set the image to visible shortly after the component mounts to trigger the animation
		const timer = setTimeout(() => {
			setImageLoaded(true);
		}, 100); // Adjust delay as needed

		return () => clearTimeout(timer); // Cleanup timeout if component unmounts early
	}, []);

	// Function to handle mouse movement over the image
	const handleMouseMove = (event) => {
		const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
		const x = ((event.pageX - left) / width) * 100 - 50; // Calculate the X position relative to element
		const y = ((event.pageY - top) / height) * 100 - 50; // Calculate the Y position relative to element

		// Update the transform styles for the image
		imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x * 0.1}deg) rotateX(${y * -0.1}deg)`;
	};

	// Function to reset the image transform when mouse leaves
	const handleMouseLeave = () => {
		imageContainerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
	};

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						{/* Logo component can be uncommented or adjusted as needed */}
						{/* <div>
				<Logo width={80} link={false} />
			  </div> */}
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">{INFO.homepage.title}</div>
								<div className="subtitle homepage-subtitle">{INFO.homepage.description}</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div
									className={`homepage-image-container ${imageLoaded ? "homepage-image-visible" : "homepage-image-entrance"}`}
									onMouseMove={handleMouseMove}
									onMouseLeave={handleMouseLeave}
									ref={imageContainerRef}
								>
									<div className="homepage-image-wrapper">
										<img
											src="homepage.webp"
											alt="about"
											className="homepage-image"
											onLoad={() => setImageLoaded(true)} // Ensure image is visible once loaded
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
					</div>

					<div className="homepage-projects">
						<AllProjects />
					</div>

					<div className="homepage-after-title">
						<div className="homepage-articles">
							{myArticles.map((article, index) => (
								<div className="homepage-article" key={index.toString()}>
									<Article key={index.toString()} date={article().date} title={article().title} description={article().description} link={"/article/" + (index + 1)} />
								</div>
							))}
						</div>

						<div className="homepage-works">
							<Works />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;