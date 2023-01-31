import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SinglePlanet } from "./views/singlePlanet.jsx";
import { SingleVehicle } from "./views/singleVehicle.jsx";
import injectContext from "./store/appContext";
import { SignUp } from "./views/signUp.js"
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes >
						<Route path="/login" element={<Demo />} />
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<SignUp />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/singlePlanet/:theid" element={<SinglePlanet />} />
						<Route path="/singleVehicle/:theid" element={<SingleVehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
