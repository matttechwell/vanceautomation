import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { motion as m, AnimatePresence } from 'framer-motion';

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	const location = useLocation(); // Hook to get the current location

	return (
		<AnimatePresence mode='wait'> // Updated based on the error message
			<m.div
				key={location.pathname} // Important for triggering animations on route change
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="App"
			>
				<Routes location={location}> // Pass location to Routes for correct handling of navigation
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</m.div>
		</AnimatePresence>
	);
}

export default App;
