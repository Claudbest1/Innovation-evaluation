import ScrollToTop from "@/components/ScrollToTop";
import TopNav from "@/components/nav/TopNav";
import Home from "@/pages/Home";
import ProcessSurveyForm from "@/pages/survey-form-process";
import ProductSurveyForm from "@/pages/survey-form-product";
import { Route, Routes } from "react-router-dom";
import routesPath from "./routesPath";

const { HOME, PRODUCTFORM, PROCESSFORM } = routesPath;

const AppRoute = () => {
	return (
		<>
			<ScrollToTop />
			<TopNav /> {/* Always rendered on all pages */}
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={PRODUCTFORM} element={<ProductSurveyForm />} />
				<Route path={PROCESSFORM} element={<ProcessSurveyForm />} />
				{/* Fallback route (optional) */}
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
};

export default AppRoute;
