"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import ProductSurveyIntroduction from "./survey-introduction-product";

type LikertValue = "1" | "2" | "3" | "4" | "5";

interface FormData {
	q1: string;
	q2: string;
	q31: string;
	q32: string;
	section1b: Record<number, LikertValue>;
	section2: Record<number, LikertValue>;
	section3: Record<number, LikertValue>;
	section4: Record<number, LikertValue>;
	section5: Record<number, LikertValue>;
	section6: Record<number, LikertValue>;
}

const ProductSurveyForm = () => {
	const [productSurveyData] = useState({});

	const [submitting, setSubmitting] = useState(false);
	const [, setSuccess] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		q1: "",
		q2: "",
		q31: "",
		q32: "",
		section1b: {},
		section2: {},
		section3: {},
		section4: {},
		section5: {},
		section6: {},
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setSuccess(false);

		try {
			const payload = {
				product: productSurveyData,
			};

			const res = await fetch(
				"https://questionaire-app-1.orender.com/api/questionnaires",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);

			if (!res.ok) throw new Error("Failed to submit survey");

			setSuccess(true);
		} catch (error) {
			console.error("Survey submission failed:", error);
		} finally {
			setSubmitting(false);
		}
	};

	const section1bStatements = [
		{
			id: 3,
			text: "The product introduces new approaches or technologies to community flood risk management.",
		},
		{
			id: 4,
			text: "The product addresses gaps not previously covered by existing flood risk solutions.",
		},
		{
			id: 5,
			text: "The product demonstrates creativity in integrating scientific, technical, and community knowledge for flood resilience.",
		},
		{
			id: 6,
			text: "The product is protected by patent.",
		},
		{
			id: 7,
			text: "The product offers significant improvements over existing solutions for flood awareness, adaptation, or response or recovery.",
		},
		{
			id: 8,
			text: "The product is developed through unique partnership (eg academic, industry, community...).",
		},
	];

	const section2Statements = [
		{
			id: 9,
			text: "The product effectively reduces community exposure or vulnerability to flood risk.",
		},
		{
			id: 10,
			text: "The product improves decision-making (in terms of awareness, adaptation, response and recovery) for flood events.",
		},
		{
			id: 11,
			text: "The product has helped to improve awareness, adaptation, response and recovery in flood events.",
		},
		{
			id: 12,
			text: "Evidence shows that the product performs as intended under real flood conditions.",
		},
		{
			id: 13,
			text: "The product has strengthened collaboration among stakeholders in flood resilience.",
		},
	];

	const section3Statements = [
		{
			id: 14,
			text: "Community members and local stakeholders readily accept and use the product.",
		},
		{
			id: 15,
			text: "The product design reflects local cultural and social contexts.",
		},
		{
			id: 16,
			text: "Training and guidance provided were sufficient for confident use of the product.",
		},
		{
			id: 17,
			text: "Users feel safer or more confident because of using the product.",
		},
	];
	const section4Statements = [
		{
			id: 18,
			text: "The product can be scaled up to larger populations or wider geographic areas.",
		},
		{
			id: 19,
			text: "The product can be adapted or replicated in other communities with similar flood risks.",
		},
		{
			id: 20,
			text: "The resources required for scaling or replication are realistic and accessible.",
		},
	];
	const section5Statements = [
		{
			id: 21,
			text: "The product can be maintained and operated beyond the life of the project.",
		},
		{
			id: 22,
			text: "Long-term funding or policy support is likely to sustain the product’s use.",
		},
		{
			id: 23,
			text: "The product builds local capacity so that communities can manage it independently.",
		},
	];
	const section6Statements = [
		{
			id: 24,
			text: "Clear indicators have been developed to measure the product’s impact on flood risk reduction.",
		},
		{
			id: 25,
			text: "Data collected demonstrate measurable improvements in community flood resilience.",
		},
		{
			id: 26,
			text: "Lessons learned from impact measurement are used to improve the product.",
		},
		{
			id: 27,
			text: "The product will change the way we plan for or respond to flood risks.",
		},
		{
			id: 28,
			text: "The product has improved my understanding of flood risks beyond what I knew before.",
		},
		{
			id: 29,
			text: "Using the product will lead/has led to noticeable improvements in flood awareness, adaptation, response and recovery.",
		},
		{
			id: 30,
			text: "The product encourages me to take actions that I would not have considered otherwise.",
		},
	];

	return (
		<div className="py-12 px-6 md:px-36">
			<ProductSurveyIntroduction />
			<Card className="w-full">
				<CardHeader>
					{/* <CardTitle className="text-2xl">Novelty of the Product</CardTitle> */}
					<CardDescription className="text-base">
						1 – Strongly Disagree; 2 – Disagree; 3 – Neutral; 4 – Agree and 5 –
						Strongly Agree
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Section 1a */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold">
								Section 1a – Novelty of the Product
							</h3>

							{/* Question 1 */}
							<div className="space-y-3">
								<Label className="text-base font-medium">
									1. How new or unique do you perceive this product to be
									compared to existing offerings in the market?
								</Label>
								<RadioGroup
									value={formData.q1}
									onValueChange={(value) =>
										setFormData({ ...formData, q1: value })
									}
									className="flex flex-wrap gap-4"
								>
									{[
										{ value: "not-new", label: "Not new at all" },
										{ value: "slightly-new", label: "Slightly new" },
										{ value: "moderately-new", label: "Moderately new" },
										{ value: "very-new", label: "Very new" },
										{ value: "completely-new", label: "Completely new" },
									].map((option) => (
										<div key={option.value} className="flex items-center gap-2">
											<RadioGroupItem
												value={option.value}
												id={`q1-${option.value}`}
											/>
											<Label
												htmlFor={`q1-${option.value}`}
												className="font-normal cursor-pointer"
											>
												{option.label}
											</Label>
										</div>
									))}
								</RadioGroup>
							</div>

							{/* Question 2 */}
							<div className="space-y-3">
								<Label className="text-base font-medium">
									2. Compared with previous versions or similar products, how
									extensive are the changes in its design or functionality?
								</Label>
								<RadioGroup
									value={formData.q2}
									onValueChange={(value) =>
										setFormData({ ...formData, q2: value })
									}
									className="flex flex-wrap gap-4"
								>
									{[
										{ value: "no-change", label: "No change at all" },
										{ value: "minor-change", label: "Minor change" },
										{ value: "moderate-change", label: "Moderate change" },
										{
											value: "significant-change",
											label: "Significant change",
										},
										{ value: "major-change", label: "Major change" },
									].map((option) => (
										<div key={option.value} className="flex items-center gap-2">
											<RadioGroupItem
												value={option.value}
												id={`q2-${option.value}`}
											/>
											<Label
												htmlFor={`q2-${option.value}`}
												className="font-normal cursor-pointer"
											>
												{option.label}
											</Label>
										</div>
									))}
								</RadioGroup>
							</div>
						</div>

						{/* Section 1b */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 1b – Novelty of the Product
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section1bStatements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section1b-${statement.id}`}
																value={value}
																checked={
																	formData.section1b[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section1b: {
																			...formData.section1b,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 2 */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 2 – Effectiveness
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section2Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section2-${statement.id}`}
																value={value}
																checked={
																	formData.section2[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section2: {
																			...formData.section2,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 3 */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 3 – User Acceptance
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section3Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section3-${statement.id}`}
																value={value}
																checked={
																	formData.section3[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section3: {
																			...formData.section3,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
						{/* Section 4 – Scalability and Replicability */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 4 – Scalability and Replicability
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section4Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section4-${statement.id}`}
																value={value}
																checked={
																	formData.section4[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section4: {
																			...formData.section4,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* Section 5 – Sustainability */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 5 – Sustainability
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section5Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section5-${statement.id}`}
																value={value}
																checked={
																	formData.section5[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section5: {
																			...formData.section5,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
						{/* Section 6 – Impact Measurement */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">
								Section 6 – Impact Measurement
							</h3>
							<div className="overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr className="bg-muted">
											<th className="border border-border p-3 text-left font-semibold w-16"></th>
											<th className="border border-border p-3 text-left font-semibold">
												Statement
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SD
												<br />1
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												D<br />2
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												N<br />3
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												A<br />4
											</th>
											<th className="border border-border p-3 text-center font-semibold w-16">
												SA
												<br />5
											</th>
										</tr>
									</thead>
									<tbody>
										{section6Statements.map((statement) => (
											<tr key={statement.id} className="hover:bg-muted/50">
												<td className="border border-border p-3 text-center font-medium">
													{statement.id}
												</td>
												<td className="border border-border p-3">
													{statement.text}
												</td>
												{(["1", "2", "3", "4", "5"] as LikertValue[]).map(
													(value) => (
														<td
															key={value}
															className="border border-border p-3 text-center"
														>
															<input
																type="radio"
																name={`section6-${statement.id}`}
																value={value}
																checked={
																	formData.section6[statement.id] === value
																}
																onChange={() =>
																	setFormData({
																		...formData,
																		section6: {
																			...formData.section6,
																			[statement.id]: value,
																		},
																	})
																}
																className="w-4 h-4 cursor-pointer accent-primary"
															/>
														</td>
													)
												)}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
						{/* Section 7 - Open-Ended Questions */}
						<div className="space-y-6 border-t pt-8">
							<h3 className="text-lg font-semibold">
								Section 7 – Open-Ended Questions (Optional)
							</h3>

							{/* Question 31 */}
							<div className="space-y-3">
								<Label htmlFor="q31" className="text-base font-medium">
									31. What aspects of the product do you consider most
									innovative?
								</Label>
								<textarea
									id="q31"
									value={formData.q31}
									onChange={(e) =>
										setFormData({ ...formData, q31: e.target.value })
									}
									placeholder="Please provide your response here..."
									className="w-full min-h-32 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
								/>
							</div>

							{/* Question 32 */}
							<div className="space-y-3">
								<Label htmlFor="q32" className="text-base font-medium">
									32. What improvements would you recommend to enhance the
									product's impact and sustainability?
								</Label>
								<textarea
									id="q32"
									value={formData.q32}
									onChange={(e) =>
										setFormData({ ...formData, q32: e.target.value })
									}
									placeholder="Please provide your response here..."
									className="w-full min-h-32 p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
								/>
							</div>
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
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductSurveyForm;
