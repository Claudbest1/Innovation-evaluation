import { Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import TopNav from "@/components/nav/TopNav";
import SurveyForm from "@/pages/SurveyForm";
import routesPath from "./routesPath";
import Home from "@/pages/Home";

const { HOME, FORM } = routesPath;

const AppRoute = () => {
	return (
		<>
			<ScrollToTop />
			<TopNav /> {/* Always rendered on all pages */}
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={FORM} element={<SurveyForm />} />
				{/* Fallback route (optional) */}
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
};

export default AppRoute;
