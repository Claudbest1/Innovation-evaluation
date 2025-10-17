"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProcessSurveyForm from "./survey-form-process";
import ProductSurveyForm from "./survey-form-product";
import ProcessSurveyIntroduction from "./survey-introduction-process";
import ProductSurveyIntroduction from "./survey-introduction-product";

const SurveyForm = () => {
	const [productSurveyData, setProductSurveyData] = useState({});
	const [processSurveyData, setProcessSurveyData] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setSuccess(false);

		try {
			const payload = {
				product: productSurveyData,
				process: processSurveyData,
			};

			const res = await fetch("/api/questionnaires", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!res.ok) throw new Error("Failed to submit survey");

			setSuccess(true);
		} catch (error) {
			console.error("Survey submission failed:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="py-12 px-6 md:px-36">
			<form onSubmit={handleSubmit}>
				<div>
					<ProductSurveyIntroduction />
					<ProductSurveyForm onChange={setProductSurveyData} />

					<ProcessSurveyIntroduction />
					<ProcessSurveyForm onChange={setProcessSurveyData} />
				</div>

				<div className="flex justify-end pt-4">
					<Button
						type="submit"
						size="lg"
						disabled={submitting}
						variant="default"
					>
						{submitting ? "Submitting..." : "Submit Survey"}
					</Button>
				</div>

				{success && (
					<p className="text-green-600 pt-4">Survey submitted successfully!</p>
				)}
			</form>
		</div>
	);
};

export default SurveyForm;
