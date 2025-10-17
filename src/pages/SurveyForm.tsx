"use client";

import ProcessSurveyForm from "./survey-form-process";
import ProductSurveyForm from "./survey-form-product";
import ProcessSurveyIntroduction from "./survey-introduction-process";
import ProductSurveyIntroduction from "./survey-introduction-product";

const SurveyForm = () => {
	return (
		<div className="py-12 px-6 md:px-36">
			<ProductSurveyIntroduction />
			<ProductSurveyForm />

			<ProcessSurveyIntroduction />
			<ProcessSurveyForm />
		</div>
	);
};

export default SurveyForm;
