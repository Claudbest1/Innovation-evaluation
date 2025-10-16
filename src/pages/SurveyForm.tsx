import SurveyForm from "./survey-form";
import SurveyIntroduction from "./survey-introduction";

const SurveyFormm = () => {
	return (
		<div className="py-12 px-36">
			<SurveyIntroduction />
			<SurveyForm />
		</div>
	);
};

export default SurveyFormm;
